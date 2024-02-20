import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SSearchList = styled.div`
  ${tw`w-full min-h-[60dvh] max-h-[30dvh] rounded-xl border-solid border flex flex-col items-center absolute top-[200%] p-3 overflow-hidden `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: #ffffff;
  `}


  div {
    ${tw`overflow-y-auto  `}
  }

  

  h1 {
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }
`;
