import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SSearchList = styled.div`
  ${tw`w-[90vw] sm:w-full min-h-[10dvh] max-h-[55dvh] rounded-xl border-solid border-2 flex flex-col items-center absolute top-[200%] p-3 pr-1 overflow-hidden `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: #e0e0e0;
  `}


  div {
    ${tw`w-full overflow-y-auto`}
  }

  h1 {
    ${tw`text-center font-bold mt-3 flex items-center justify-center gap-x-3 overflow-hidden `}
    color: #3b3b3b;
  }
`;
