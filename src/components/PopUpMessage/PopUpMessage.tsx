import { useEffect } from "react";
import { SPopUpMessage } from "@src/components/PopUpMessage";
import { CloseIcon } from "@src/assets/icons";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { debounce } from "lodash";

interface PopUpProps {
  showPopUpMessage: boolean;
}

export function PopUpMessage({ showPopUpMessage }: PopUpProps) {
  const { popUpText, setPopUpText } = useGlobalProvider();

  const debouncePopUpText = debounce(() => {
    if (popUpText) setPopUpText("");
  }, 8000);

  useEffect(() => {
    debouncePopUpText();
  }, [showPopUpMessage]);

  if (!showPopUpMessage) return;

  return (
    <SPopUpMessage>
      <span onClick={() => setPopUpText("")}>
        <CloseIcon />
      </span>
      <p>{popUpText}</p>
    </SPopUpMessage>
  );
}
