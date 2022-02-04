import axios from "axios";
const postApi = async (data, end_url, token) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return await axios.post(
        "http://27.96.134.100:8080" + end_url,
        data,
        config
    );
};

export default postApi;
