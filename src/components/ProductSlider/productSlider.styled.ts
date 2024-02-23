import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductSliderWrapper = styled.div`
  ${tw`w-full border-solid py-3 border-solid border border-[grey] border-x-0 border-t-0 `}

  h1 {
    ${tw`text-center`}
  }
`;

interface SCustomArrowProps {
  side: string;
}

export const SCustomArrow = styled.button<SCustomArrowProps>`
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
