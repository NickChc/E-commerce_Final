import styled, { css } from "styled-components";
import tw from "twin.macro";
import { LoadingCircle } from "@src/assets/icons";

interface SLoadingCircleProps {
  hasColor?: boolean;
}

export const SloadingCircleAnim = styled.span<SLoadingCircleProps>`
  ${tw`animate-spin flex items-center justify-center`}
  ${(props) => css`
    color: ${props.hasColor && props.theme.colors["additional"]};
  `}
`;

export const SLoadingIcon = styled(LoadingCircle)`
  ${tw`animate-spin `}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}
`;
