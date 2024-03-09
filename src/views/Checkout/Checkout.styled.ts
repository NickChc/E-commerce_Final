import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckout = styled.div`
  ${tw`w-full min-h-dvh flex flex-col items-center `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;
