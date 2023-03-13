import { useEffect, useState } from "react";
import "./map.css"

export default function Map({ countryName }) {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyhrptyng664wJgEw5kN-SfHDH1CkoQ0`;
        script.async = true;
        script.onload = () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 0, lng: 0 },
                zoom: 2,
            });
            setMap(map);
        };
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (map && countryName) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: countryName }, (results, status) => {
                if (status === "OK") {
                    const location = results[0].geometry.location;
                    map.setCenter(location);
                    new window.google.maps.Marker({
                        position: location,
                        map: map,
                        title: countryName,
                    });
                } else {
                    alert(
                        "Geocode was not successful for the following reason: " + status
                    );
                }
            });
        }
    }, [map, countryName]);

    return <div id="map" className="map" style={{ width: "95%", height: "400px" }} />;
}
