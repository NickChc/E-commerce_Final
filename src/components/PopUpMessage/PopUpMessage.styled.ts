import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPopUpMessage = styled.div`
  ${tw`w-[90%] p-3 pt-5 absolute top-[80dvh] rounded-md text-center border-solid border text-[1.2rem] duration-150 `}
  ${() => css`
    background-color: rgb(180, 255, 180);
    color: green;
    border-color: green;
    animation: popUp 0.2s linear;
  `}

  @keyframes popUp {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  span {
    ${tw`absolute top-0 right-0 cursor-pointer `}
  }
`;
