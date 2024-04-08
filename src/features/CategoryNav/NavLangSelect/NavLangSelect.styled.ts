import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SNavLangSelectProps {
  show: boolean;
}

export const SNavLangSelect = styled.div<SNavLangSelectProps>`
  ${tw`w-full flex flex-row-reverse sm:flex-row items-center justify-between gap-x-3 relative rounded-lg pl-1 cursor-pointer `}
  ${(props) => css`
    ${props.show ? tw`opacity-[1] ` : tw`opacity-[.8] `}
    background-color: ${props.show && props.theme.colors["secondary"]};
  `}

  @media (hover: hover) {
    :hover {
      ${tw`opacity-[1] `}
    }
  }

  h4 {
    ${tw`w-full flex items-center gap-x-4 truncate`}

    img {
      ${tw`w-[24px] rounded-full aspect-square `}
    }
  }

  span {
    ${tw`grid place-items-center p-[.3rem] duration-150 rounded-full text-[1rem] sm:text-[1rem] lg:text-[1.2rem] `}
    ${(props) => css`
      ${props.show && tw`rotate-90  `}
      color: ${props.show
        ? props.theme.colors["additional"]
        : props.theme.colors["myGray"]};
      background-color: ${props.theme.colors["primary"]};
    `}

    @media(hover: hover) {
      :hover {
        ${(props) => css`
          color: ${props.theme.colors["additional"]};
        `}
      }
    }
  }
`;

interface SLangOptionProps {
  disabled: boolean;
}

export const SLangOption = styled.h3<SLangOptionProps>`
  ${tw`font-bold duration-75 p-1`}
  ${(props) => css`
    ${props.disabled && tw`opacity-[.6] cursor-default`}
    color: ${props.theme.colors["primary"]};

    @media (hover: hover) {
      :hover {
        ${!props.disabled &&
        css`
          background-color: ${props.theme.mode === "DARK"
            ? props.theme.colors["secondary"]
            : props.theme.colors["secondary_text"]};
          color: ${!props.disabled && props.theme.colors["myWhite"]};
        `}
      }
    }
  `}
`;

export const SLanguages = styled.div`
  ${tw`absolute w-full border-solid border rounded-md p-1 top-[120%] flex flex-col items-stretch `}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `} h3 {
    ${tw`border-solid border border-x-0 first:border-t-0 last:border-0 first:rounded-t-lg last:rounded-b-lg `}
  }
`;
