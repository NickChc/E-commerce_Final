import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckout = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex justify-between relative `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SRightSide = styled.div`
  ${tw`flex flex-col items-stretch gap-y-6 sm:gap-y-14 px-3 sm:px-6 mr-3 sm:mr-9 border-solid border border-y-0 border-r-0 `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_background"]};
  `}
`;
