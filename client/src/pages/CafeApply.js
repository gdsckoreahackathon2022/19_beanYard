import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
import '../styles/CafeApply.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import DateTimePicker from 'react-datetime-picker';
import { postApi } from "../api";
import { AuthContext } from "../App";
import dayjs from "dayjs";

const CafeApply = () => {
    const donateForm = useRef(null);
    const authContext = useContext(AuthContext);

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    let mapInfo;
    const [markers, setMarkers] = useState([]);
    const [searchBox, setSearchBox] = useState(undefined);

    const [value, onChange] = useState(new Date());

    const getInfo = () => {
        mapInfo.addListener("bounds_changed", () => {
            searchBox.setBounds(mapInfo.getBounds());
        });

        searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
    
        if (places.length === 0) {
            return;
        }
    
        setMarkers([]);
    
        const bounds = new window.google.maps.LatLngBounds();
    
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
            return;
            }

            let m = [];
            m.push({
                name: place.name,
                loc: place.geometry.location
            });
            setMarkers(m);

            if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
            } else {
            bounds.extend(place.geometry.location);
            }
        });
        mapInfo.fitBounds(bounds);
        });
    };

    const createSearchBox = useCallback(() => {
        // Create the search box and link it to the UI element.
       const input = document.getElementById("pac-input");
       setSearchBox(new window.google.maps.places.SearchBox(input));
    }, []);

    const postCafeApply = async () => {
        const cafeName = donateForm.current.cafeName.value;
        const locationName = donateForm.current.locationName.value;
        let latitude = parseFloat(0.00), longitude = parseFloat(0.00);
        const time = dayjs(donateForm.current.dateTime.value).format('YYYY-MM-DD HH:MM:ss');
        const coffee = parseInt(donateForm.current.coffeeSize.value);
        const description = donateForm.current.description.value;

        if(markers.length) {
            latitude = markers[0].loc.lat();
            longitude = markers[0].loc.lng();
        }
        
        await postApi(
            {
                name: cafeName,
                location: locationName,
                lon: longitude,
                lat: latitude,
                time: time,
                coffee: coffee,
                message: description,
                userSeq: 1
            },
            "/api/cafe",
            authContext.state.token
        )
        .then(({ status, data }) => {
            console.log(status, data);
        })
        .catch((e) => {
            console.log(e);
        });
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
              }
            )
        };
        createSearchBox();
    }, [lat, lng, createSearchBox]);

    const fetchPlaces = (mapProps, map) => {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
        mapInfo = map;
    };

    return (
        <div className="cafe-apply">
            <div className="logo">
                <div className="logo-title">
                    <div>Donate</div>
                    <div>Your Coffee Grounds</div>
                </div>
                <div>Fill out the form</div>
            </div>
            <div className="form">
                <form ref={donateForm}>
                    <div>Cafe Name</div>
                    <input name="cafeName"/>

                    <div>Location</div>
                    <input
                        id="pac-input"
                        className="controls"
                        type="text"
                        placeholder=""
                        onKeyPress={getInfo}
                        onClick={getInfo}
                        name="locationName"
                    />
                    <Map
                        google={window.google}
                        zoom={12}
                        onReady={fetchPlaces}
                        initialCenter={{ lat: lat, lng: lng}}
                        center={{lat: lat, lng: lng}}
                        // style={{ width: '0', height: '0' }}
                        style={{ width: '50%' }}
                    >
                        <Marker position={{ lat: lat, lng: lng}} />
                        {
                            markers.map((e) => {
                                console.log(e.name)
                                return (
                                    <Marker
                                        // onClick={onMarkerClick}
                                        position={{ lat: e.loc.lat(), lng: e.loc.lng()}} key={{ e }}
                                        name={e.name}
                                    />
                                )
                            })
                        }
                        {/* { markers.length &&
                            <InfoWindow
                                marker={currentMarker}
                                visible={true}
                            >
                                <div>
                                    <h1>{markers[0].name}</h1>
                                </div>
                            </InfoWindow>
                        } */}
                    </Map>
                    <div>When</div>
                    <DateTimePicker
                        onChange={onChange}
                        value={value}
                        calendarIcon={null}
                        clearIcon={null}
                        name="dateTime"
                    />

                    <div style={{ clear: 'both' }}></div>
                    <input
                        name="coffeeSize"
                        className="coffeeSize"
                    />
                    <span style={{ margin: '12px 6px' }}>g</span>
                    <div style={{ clear: 'both' }}></div>

                    <div>Type your message here</div>
                    <textarea
                        name="description"
                        inputMode="text"
                    ></textarea>
                    <div style={{ clear: 'both' }}></div>
                </form>
                <div style={{ clear: 'both' }}></div>

                <button
                        className="submit-btn"
                        onClick={postCafeApply}
                >Submit</button>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyBkgjzWkzu_PSikUrYktcYp6c29ZMYl0k0",
})(CafeApply);