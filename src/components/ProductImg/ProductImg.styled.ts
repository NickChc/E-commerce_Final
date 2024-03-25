import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SProductImgProps {
  loaded: boolean;
}

export const SImgHolder = styled.span<SProductImgProps>`
  ${tw`flex items-center justify-center `}
  ${(props) => css`
    ${props.loaded ? tw`visible w-auto h-auto` : tw`invisible h-0 w-0 absolute`}
    background-color: transparent;
  `}
`;

export const SPlaceholderImgWrapper = styled.span<SProductImgProps>`
  ${tw`grid place-items-center `}
  ${(props) => css`
    ${props.loaded ? tw`invisible w-0 h-0 ` : tw`visible h-auto w-auto `}
  `}
`;
