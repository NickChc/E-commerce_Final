import styled from "styled-components";
import tw from "twin.macro";

export const SHeaderIcon = styled.div`
  @keyframes iconRotate {
    from {
      rotate: 0;
    }
    to {
      rotate: 360deg;
    }
  }

  ${tw`text-3xl sm:text-4xl text-[#1F51FF] cursor-pointer`}

  :hover {
    animation: iconRotate 4s infinite linear;
  }

  
`;
