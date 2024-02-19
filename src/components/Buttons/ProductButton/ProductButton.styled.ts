import styled, { css } from "styled-components";
import tw from "twin.macro";

interface ProductButtonProps {
  side?: string;
  variation?: string;
}

export const SProductButton = styled.button<ProductButtonProps>`
  ${tw`py-[.5rem] px-[.8rem] border-solid border cursor-pointer duration-150 whitespace-nowrap text-[.65rem] sm:text-[.75rem] md:text-[.9rem] lg:text-[1rem] 2xl:text-[.9rem] flex items-center justify-center gap-x-1 break-words `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    color: ${props.theme.colors["additional"]};
    background-color: ${props.variation === "primary" &&
    props.theme.colors["additional"]};
    color: ${props.variation === "primary" && props.theme.colors["secondary"]};
    ${props.side === "right"
      ? tw`rounded-r-xl w-[50%]`
      : props.side === "left"
      ? tw`rounded-l-xl border-r-0 w-[50%] `
      : tw`rounded-xl`}
    ${props.variation === "primary" && tw`opacity-[.9]  `}
  `}

    :hover {
    @media (hover: hover) {
      ${(props) => css`
        ${tw`opacity-[1]`}
        background-color: ${props.theme.colors["additional"]};
        color: ${props.theme.colors["secondary"]};
      `}
    }
  }
`;
