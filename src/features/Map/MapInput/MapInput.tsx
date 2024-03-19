import { useState } from "react";
import { useIntl } from "react-intl";
import { SMapInputForm, SMapInputWrapper } from "@src/features/Map/MapInput";
import { LatLngExpression } from "leaflet";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { PlusIcon } from "@src/assets/icons";
import { useSearchLocation } from "@src/hooks/useSearchLocation";

interface MapInputProps {
  setCoords: React.Dispatch<React.SetStateAction<LatLngExpression>>;
}

export function MapInput({ setCoords }: MapInputProps) {
  const [address, setAddress] = useState<string>("");

  const { formatMessage } = useIntl();

  const { searchLocation, searchingLocation, locationError } =
    useSearchLocation();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (address === "") return;

    searchLocation(address, setCoords);
  }

  return (
    <SMapInputWrapper>
      <p>{locationError}</p>
      <SMapInputForm onSubmit={onSubmit}>
        <input
          placeholder={formatMessage({
            id: "deliveryAddress",
            defaultMessage: "_DELIVERY_ADDRESS_",
          })}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" disabled={address === ""}>
          {searchingLocation ? <LoadingCircleAnim /> : <PlusIcon />}
        </button>
      </SMapInputForm>
    </SMapInputWrapper>
  );
}
