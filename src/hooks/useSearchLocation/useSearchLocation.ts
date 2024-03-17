import { useState } from "react";
import axios from "axios";
import { LatLngExpression } from "leaflet";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useSearchLocation() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setDeliveryAddress } = useGlobalProvider();

  async function searchLocation(
    address: string,
    setCoords?: (arg: LatLngExpression) => void
  ) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1&polygon_geojson=0`
      );
      if (setCoords) {
        const lat = response.data[0].lat;
        const lng = response.data[0].lon;
        setCoords([lat, lng]);
      }
      console.log(response.data[0]);
      setDeliveryAddress(response.data[0]?.display_name);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { searchLocation, searchingLocation: loading };
}
