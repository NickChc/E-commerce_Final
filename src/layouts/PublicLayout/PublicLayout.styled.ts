import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPublicLayout = styled.div`
  ${tw`w-full min-h-dvh flex flex-col items-center justify-between relative`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}
`;

export const SOutletWrapper = styled.div`
  ${tw`w-full flex flex-col items-center relative z-0 `}
`;
