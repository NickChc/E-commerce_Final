import { ThemeModes_Enum } from "@src/providers/ThemeProvider";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SLogInForm = styled.form`
  ${tw`flex flex-col items-center justify-between w-full h-full text-center pb-6 px-3 `}
  ${(props) => css`
    color: ${props.theme.colors["secondary"]};
  `}

  h3 {
    ${tw`text-[.75rem] md:text-[1rem] xl:text-[1.2rem]  `}
  }

  p {
    ${tw`justify-self-end whitespace-nowrap text-[.7rem] sm:text-[.85rem] md:text-[1rem] `}
    ${(props) => css`
      color: ${props.theme.colors["secondary"]};
    `}
  }

  a {
    ${tw`font-semibold whitespace-nowrap underline cursor-pointer `}

    ${(props) => css`
      color: ${props.theme.mode === ThemeModes_Enum.LIGHT
        ? props.theme.colors["secondary_background"]
        : props.theme.colors["additional"]};
      /* color: ${props.theme.colors["secondary_background"]}; */
    `}

    :active {
      ${(props) => css`
        color: ${props.theme.colors["additional"]};
      `}
    }

    @media (hover: hover) {
      :hover {
        ${(props) => css`
          ${tw`opacity-[.75] `}
          color: ${props.theme.colors[""]};
        `}
      }
    }
  }
`;

export const SInputsWrapper = styled.div`
  ${tw`flex flex-col items-stretch gap-y-[3dvh] w-full `}

  button {
    ${tw`duration-[50ms] `}
  }
`;

export const SFormContent = styled.div`
  ${tw`flex flex-col items-stretch justify-between h-full mt-6 `}
`;
