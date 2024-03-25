import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-[90%]  min-h-dvh flex flex-col justify-start sm:flex-row items-start  `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background: ${props.theme.colors["secondary"]};
  `}
`;

export const SLeftSide = styled.div`
  ${tw`flex flex-col items-center w-full sm:w-[70%] sm:min-h-dvh border-none sm:border-solid border border-y-0 border-l-0  `}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  h2 {
    ${tw`text-[1rem] `}
  }
`;

export const SRightSide = styled.div`
  ${tw`flex flex-col items-center w-full sm:w-[30%] pl-1 min-h-full   `}
`;
