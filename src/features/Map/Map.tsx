import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { SMapContainer } from "@src/features/Map";
import { ChangeView } from "@src/features/Map/ChangeView";
import { MapMarker } from "@src/features/Map/Marker";
import { MapInput } from "@src/features/Map/MapInput";
import { DELIVERY_ADDRESS } from "@src/config/sessionStorageKeys";
import { useSearchLocation } from "@src/hooks/useSearchLocation";

export function Map() {
  const [userCoords, setUserCoords] = useState<LatLngExpression>([0, 0]);

  const { searchLocation } = useSearchLocation();

  useEffect(() => {
    const delivery = sessionStorage.getItem(DELIVERY_ADDRESS);
    if (delivery) {
      const parsedDelivery = JSON.parse(delivery);
      searchLocation(parsedDelivery, setUserCoords);
    } else if ("geolocation" in navigator) {
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
      <h4>
        <FormattedMessage
          id="searchOrDragAddress"
          defaultMessage={"_SEARCH_ADDRESS_OR_DRAG_PIN_"}
        />
      </h4>
      <MapContainer
        center={userCoords}
        zoom={10}
        style={{ height: "30dvh", borderRadius: "16px", zIndex: 1 }}
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
