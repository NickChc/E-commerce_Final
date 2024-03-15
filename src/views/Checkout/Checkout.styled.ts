import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckout = styled.div`
  ${tw`w-full min-h-dvh flex justify-center relative `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;
