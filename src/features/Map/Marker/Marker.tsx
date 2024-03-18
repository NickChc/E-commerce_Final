import { useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import CartMapIcon from "@src/assets/images/CartMapIcon.webp";
import { useSearchLocation } from "@src/hooks/useSearchLocation";
import { DELIVERY_ADDRESS } from "@src/config/sessionStorageKeys";

interface MapMarkerProps {
  coords: LatLngExpression;
  setCoords: React.Dispatch<React.SetStateAction<LatLngExpression>>;
}

export function MapMarker({ coords, setCoords }: MapMarkerProps) {
  const markerRef = useRef<any>(null);
  const { searchLocation } = useSearchLocation();

  function markerDrag() {
    const marker = markerRef.current;

    if (marker !== null) {
      const latLng = marker.getLatLng();
      setCoords(latLng);
      const formattedLatLng = `${latLng.lat}, ${latLng.lng}`;
      searchLocation(formattedLatLng);
      sessionStorage.setItem(
        DELIVERY_ADDRESS,
        JSON.stringify([latLng.lat, latLng.lng])
      );
    }
  }

  const customIcon = new Icon({
    iconUrl: CartMapIcon,
    iconSize: [40, 40],
  });

  return (
    <Marker
      draggable
      eventHandlers={{ dragend: markerDrag }}
      position={coords}
      icon={customIcon}
      ref={markerRef}
    >
      <Popup>Deliver Here!</Popup>
    </Marker>
  );
}
