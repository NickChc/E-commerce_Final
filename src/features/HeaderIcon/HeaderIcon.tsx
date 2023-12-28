import { useNavigate } from "react-router-dom";
import { SHeaderIcon } from "@src/features/HeaderIcon/SHeaderIcon";
import { FaReact } from "react-icons/fa";

export function HeaderIcon() {
    const navigate = useNavigate();

    return (
      <SHeaderIcon onClick={() => navigate("/")}>
        <FaReact />
      </SHeaderIcon>
    );
}