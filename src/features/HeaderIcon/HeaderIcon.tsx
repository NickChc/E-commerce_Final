import { useNavigate } from "react-router-dom";
import { SHeaderIcon } from "@src/features/HeaderIcon/HeaderIcon.styled";
import { ReactIcon } from "@src/assets/icons/React";

export function HeaderIcon() {
  const navigate = useNavigate();

  return (
    <SHeaderIcon onClick={() => navigate("/")}>
      <ReactIcon />
    </SHeaderIcon>
  );
}
