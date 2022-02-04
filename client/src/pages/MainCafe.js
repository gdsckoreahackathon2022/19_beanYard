import React, { useCallback, useEffect, useState, useRef } from "react";
import '../styles/MainCafe.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
 
const MainCafe = () => {
    const donateForm = useRef(null);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    let mapInfo;
    const [markers, setMarkers] = useState([]);

    const [searchBox, setSearchBox] = useState(undefined);
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
        <div className="main-cafe">
            <div className="logo">
            </div>
            <div className="form">
                <form ref={donateForm}>
                    <div>Cafe Name</div>
                    <input />

                    <div>Location</div>
                    <input
                        id="pac-input"
                        className="controls"
                        type="text"
                        placeholder="Search Box"
                        onKeyPress={getInfo}
                        onClick={getInfo}
                    />
                    <Map
                        google={window.google}
                        zoom={12}
                        onReady={fetchPlaces}
                        initialCenter={{ lat: lat, lng: lng}}
                        center={{lat: lat, lng: lng}}
                        style={{ width: '50%' }}
                        visible={false}
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
                    <input />

                    <div style={{ clear: 'both' }}></div>
                    <input className="coffeeSize" />
                    <span style={{ margin: '12px 6px' }}>g</span>
                    <div style={{ clear: 'both' }}></div>

                    <div>Type your message here</div>
                    <textarea></textarea>
                    <div style={{ clear: 'both' }}></div>
                </form>

                <button
                    className="submit-btn"
                    onClick={() => {console.log(donateForm.current)}}
                >Submit</button>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyBkgjzWkzu_PSikUrYktcYp6c29ZMYl0k0",
})(MainCafe);