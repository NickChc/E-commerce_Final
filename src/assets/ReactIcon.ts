import styled from "styled-components";
import tw from "twin.macro";
import { FaReact } from "react-icons/fa";

export const ReactIcon = styled(FaReact)`
  @keyframes iconRotate {
    from {
      rotate: 0;
    }
    to {
      rotate: 360deg;
    }
  }

  ${tw`text-4xl text-[#1F51FF] cursor-pointer`}

  :hover {
    animation: iconRotate 4s infinite linear;
  }

  
`;
