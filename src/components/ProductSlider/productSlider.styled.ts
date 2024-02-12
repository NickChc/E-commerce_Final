import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductSliderWrapper = styled.div`
  ${tw`w-full border-solid py-3 border-solid border border-[grey] border-x-0 border-t-0`}
`;

interface SCustomArrowProps {
  side: string;
}

export const SCustomArrow = styled.button<SCustomArrowProps>`
  ${tw`outline-none cursor-pointer rounded-[50%] p-3 opacity-[.5] hover:opacity-[1] duration-100 border-none absolute top-[50%] translate-y-[-50%] z-10 bg-red-700 `}
  ${(props) => css`
    ${props.side === "left"
      ? tw`left-[1%] `
      : props.side === "right"
      ? tw`right-[1%] `
      : ""}
    background-color: red;
    color: white;
  `}

  background-color: #3e3e3e;
`;
