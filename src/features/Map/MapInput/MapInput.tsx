import { useState } from "react";
import { SMapInput } from "@src/features/Map/MapInput";
import { LatLngExpression } from "leaflet";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { PlusIcon } from "@src/assets/icons";
import { useSearchLocation } from "@src/hooks/useSearchLocation";

interface MapInputProps {
  setCoords: React.Dispatch<React.SetStateAction<LatLngExpression>>;
}

export function MapInput({ setCoords }: MapInputProps) {
  const [address, setAddress] = useState<string>("");

  const { searchLocation, searchingLocation } = useSearchLocation();

  //   async function addressToCoords() {
  //     try {
  //       setAdding(true);
  //       const response = await axios.get(
  //         `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1&polygon_geojson=0`
  //       );
  //       const lat = response.data[0].lat;
  //       const lng = response.data[0].lon;
  //       console.log(response.data[0]);
  //       setCoords([lat, lng]);
  //       setDeliveryAddress(response.data?.[0].display_name);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     } finally {
  //       setAdding(false);
  //     }
  //   }

  return (
    <SMapInput>
      <input
        placeholder="Delivery Address"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        disabled={address === ""}
        onClick={() => searchLocation(address, setCoords)}
      >
        {searchingLocation ? <LoadingCircleAnim /> : <PlusIcon />}
      </button>
    </SMapInput>
  );
}
