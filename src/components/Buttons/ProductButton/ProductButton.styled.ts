import styled, { css } from "styled-components";
import tw from "twin.macro";

interface ProductButtonProps {
  side?: string;
  variation?: string;
}

export const SProductButton = styled.button<ProductButtonProps>`
  ${tw`py-[.5rem] px-[.8rem] border-solid border cursor-pointer whitespace-nowrap text-[.65rem] sm:text-[.75rem] md:text-[.9rem] lg:text-[1rem] 2xl:text-[.9rem] flex items-center justify-evenly gap-x-1 break-words disabled:opacity-[.75] opacity-[.85] disabled:cursor-default font-semibold duration-75 `}
  ${(props) => css`
    border-color: ${props.variation === "warning"
      ? props.theme.colors["saleClr"]
      : props.theme.colors["additional"]};
    color: ${props.theme.colors["additional"]};
    background-color: ${props.variation === "primary"
      ? props.theme.colors["additional"]
      : props.variation === "warning"
      ? props.theme.colors["secondary"]
      : null};
    color: ${props.variation === "primary"
      ? props.theme.colors["secondary"]
      : props.variation === "warning"
      ? props.theme.colors["saleClr"]
      : null};
    ${props.side === "right"
      ? tw`rounded-r-xl w-[50%]`
      : props.side === "left"
      ? tw`rounded-l-xl border-r-0 w-[50%] `
      : tw`rounded-xl`}
    ${props.variation === "primary" && tw`opacity-[.9]  `}
  `}

    :hover {
    @media (hover: hover) {
      ${tw`opacity-[1]`}
      ${(props) => css`
        background-color: ${props.variation === "warning"
          ? props.theme.colors["saleClr"]
          : props.theme.colors["additional"]};
        color: ${props.variation === "primary"
          ? props.theme.colors["secondary"]
          : props.theme.colors["secondary"]};
      `}

      span {
        ${(props) => css`
          color: ${props.theme.colors["secondary"]};
        `}
      }
    }
  }

  :disabled {
    ${tw`opacity-[.75]`}
    ${(props) => css`
      background-color: ${props.theme.colors["secondary"]};
    `}
  }

  :disabled:hover {
    ${tw`opacity-[.75] `}
    ${(props) => css`
      background-color: ${props.theme.colors["secondary"]};
      color: ${props.theme.colors["additional"]};
    `}
  }

  span {
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }
`;
