import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

export default function InfoMaps({ mapsProp }) {
  const mapObj = mapsProp !== null ? JSON.parse(mapsProp.shape_json) : null;
  const options = (prop) => ({
    strokeColor: prop,
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: prop,
    fillOpacity: 0.09,
  });
  return mapsProp ? (
    <LoadScript googleMapsApiKey="AIzaSyChxZ857StRceZGKljSRQydJ0XgRXdEowA">
      <GoogleMap     
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapObj.center}
        zoom={10}
      >
        <>
          <Marker position={mapObj.center} />
          <Circle
            options={options(mapsProp.color)}
            center={mapObj.center}
            radius={mapObj.radius}
          />
        </>
      </GoogleMap>
    </LoadScript>
  ) : null;
}
