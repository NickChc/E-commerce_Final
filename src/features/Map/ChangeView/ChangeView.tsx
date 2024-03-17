import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface ChangeViewProps {
  center: LatLngExpression;
  zoom: number;
}

export function ChangeView({ center, zoom }: ChangeViewProps) {
  const map = useMap();

  map.setView(center, zoom);

  return null;
}
