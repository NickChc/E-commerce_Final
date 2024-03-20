import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CustomArrowProps {
  side: string;
}

export const SCustomArrow = styled.button<CustomArrowProps>`
  ${tw`flex items-center justify-center outline-none cursor-pointer rounded-[50%] p-3 opacity-[.5] duration-100 border-none absolute top-[50%] disabled:cursor-default translate-y-[-50%] z-1`}
  ${(props) => css`
    ${props.side === "left"
      ? tw`left-[1%] `
      : props.side === "right"
      ? tw`right-[1%] `
      : ""}
    color: white;
    background-color: #3e3e3e;
  `}

  @media (hover: hover) {
    :hover {
      ${tw`opacity-[1] disabled:opacity-[.5] `}
    }
  }
`;
