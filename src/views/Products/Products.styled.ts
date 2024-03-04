import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProducts = styled.div`
  ${tw`w-full pr-6 min-h-dvh flex items-stretch `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SProductsHolder = styled.div`
  ${tw`w-full min-h-dvh grid grid-cols-repeat-15 pb-14 gap-y-9 p-3 `}
`;
