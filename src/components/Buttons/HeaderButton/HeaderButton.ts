import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SButtonProps {
  variation?: string;
}

export const Button = styled.button<SButtonProps>`
  ${tw`p-[.6rem] py-[.4rem] text-[.75rem] md:text-[.8rem] aspect-square sm:aspect-auto overflow-hidden mx-3 rounded-xl font-semibold border-solid border cursor-pointer flex sm:flex-row  items-center justify-center sm:justify-between gap-x-3 transition-all duration-200 disabled:cursor-default disabled:opacity-[.75] outline-none `}

  ${(props) => css`
    ${props.variation === "active" && tw`rounded-md`}
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.variation === "active" &&
    props.theme.colors["additional"]};
    color: ${props.variation === "active" && "#fff"};
  `}

  @media (hover: hover) {
    :hover {
      ${tw`rounded-md`}
      color: ${(props) =>
        props.variation !== "active" && props.theme.colors["additional"]};
    }

    :disabled {
      ${(props) => css`
        color: ${props.theme.colors["secondary_text"]};
      `}
    }

    :hover:disabled {
      ${tw`rounded-xl `}
      ${(props) => css`
        color: ${props.theme.colors["secondary_text"]};
      `}
    }
  }

  div {
    ${tw`text-[1rem] md:text-[1.4rem] mt-1 `}
    color: ${(props) =>
      props.variation === "active"
        ? "#ffffff"
        : props.theme.colors["additional"]};
  }

  p {
    ${tw`hidden sm:block whitespace-nowrap`}
  }
`;
