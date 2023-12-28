import { PropsWithChildren } from "react";
import { SButton } from "@src/components/Button";

interface ButtonProps {
  onClick: () => void;
  isActive?: boolean;
}

export function Button({ children, onClick, isActive }: PropsWithChildren<ButtonProps>) {
  return <SButton variation={isActive ? "active" : ""} onClick={onClick}>{children}</SButton>;
}
