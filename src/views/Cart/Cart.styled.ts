import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-[90%] pb-14 min-h-dvh flex  items-start justify-between relative `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background: ${props.theme.colors["secondary"]};
  `}
`;
