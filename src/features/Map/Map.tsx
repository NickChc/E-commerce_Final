import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { SMapContainer } from "@src/features/Map";
import { ChangeView } from "@src/features/Map/ChangeView";
import { MapMarker } from "@src/features/Map/Marker";
import { MapInput } from "@src/features/Map/MapInput";

export function Map() {
  const [userCoords, setUserCoords] = useState<LatLngExpression>([0, 0]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserCoords([lat, lng]);
      });
    }
  }, []);

  return (
    <SMapContainer>
        <MapInput setCoords={setUserCoords} />
      <MapContainer
        center={userCoords}
        zoom={10}
        style={{ height: "100%", borderRadius: "16px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={userCoords} zoom={20} />
        <MapMarker coords={userCoords} setCoords={setUserCoords} />
      </MapContainer>
    </SMapContainer>
  );
}
