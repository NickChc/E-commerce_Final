import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SProductImgProps {
  loaded: boolean;
}

export const SImggHolder = styled.span<SProductImgProps>`
  ${tw`flex items-center justify-center bg-[red] `}
  ${(props) => css`
    ${props.loaded ? tw`block` : tw`hidden`}
  `}
`;

export const SProductImg = styled.img<SProductImgProps>`
  ${(props) => css`
    ${props.loaded ? tw`visible block` : tw`invisible h-0 w-0 hidden `}
  `}
`;
