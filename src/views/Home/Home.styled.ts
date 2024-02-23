import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SHome = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;

export const SScreenMessage = styled.div`
  ${tw`h-[80dvh] flex items-center justify-center `}

  h1 {
    ${tw`text-[1rem] sm:text-[1.2rem] lg:text-[2rem] 2xl:text-[2.5rem] text-center flex items-center gap-x-3  `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }
`;

export const SSlidersContainer = styled.div`
  ${tw`gap-y-20 w-full flex flex-col items-center my-9`}
`;
