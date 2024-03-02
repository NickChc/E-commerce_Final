import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-full min-h-dvh flex flex-col items-center relative `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background: ${props.theme.colors["secondary"]};
  `}
`;
