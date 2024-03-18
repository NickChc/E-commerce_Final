import { useState } from "react";
import axios from "axios";
import { useIntl } from "react-intl";
import { LatLngExpression } from "leaflet";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { DELIVERY_ADDRESS } from "@src/config/sessionStorageKeys";

export function useSearchLocation() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { setDeliveryAddress } = useGlobalProvider();

  const { formatMessage } = useIntl();

  async function searchLocation(
    address: string,
    setCoords?: (arg: LatLngExpression) => void
  ) {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1&polygon_geojson=0`
      );
      if (setCoords) {
        const lat = response.data[0].lat;
        const lng = response.data[0].lon;
        setCoords([lat, lng]);
        sessionStorage.setItem(DELIVERY_ADDRESS, JSON.stringify([lat, lng]));
      }
      setDeliveryAddress(response.data[0]?.display_name);
    } catch (error: any) {
      console.log(error.message);
      setError(
        formatMessage({
          id: "locationNotFound",
          defaultMessage: "_LOCATION_NOT_FOUND_",
        })
      );
    } finally {
      setLoading(false);
    }
  }

  return { searchLocation, searchingLocation: loading, locationError: error };
}
