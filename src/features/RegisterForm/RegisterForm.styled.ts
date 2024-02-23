import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ThemeModes_Enum } from "@src/providers/ThemeProvider";

export const SRegisterForm = styled.form`
  ${tw`w-full h-full flex flex-col items-center justify-between pb-6 overflow-hidden `}

  div {
    ${tw`gap-y-[1rem] mt-3 flex flex-col items-stretch w-[80%] last:w-auto text-center `}

    button {
      ${tw`duration-[50ms] mt-9`}
    }

    p {
    ${tw`whitespace-nowrap text-[.8rem] md:text-[1rem]  `}
    ${(props) => css`
      color: ${props.theme.colors["secondary"]};
    `}

    br {
        /* ${tw`block sm:hidden `} */
    }
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
