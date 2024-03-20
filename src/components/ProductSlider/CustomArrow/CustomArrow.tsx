import { SCustomArrow } from "@src/components/ProductSlider/CustomArrow";
import { LeftArrow, RightArrow } from "@src/assets/icons";

interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  side: string;
  disabled: boolean;
}

export function CustomArrow({ onClick, side, disabled }: CustomArrowProps) {
  return (
    <SCustomArrow side={side} onClick={onClick} disabled={disabled}>
      {side === "left" ? <LeftArrow /> : <RightArrow />}
    </SCustomArrow>
  );
}
