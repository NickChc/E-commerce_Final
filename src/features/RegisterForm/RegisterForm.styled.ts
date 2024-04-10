import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ThemeModes_Enum } from "@src/providers/ThemeProvider";

export const SRegisterForm = styled.form`
  ${tw`w-full h-full flex flex-col items-center justify-between pb-0 sm:pb-3 overflow-hidden `}

  a {
    ${tw`font-semibold whitespace-nowrap underline cursor-pointer `}

    ${(props) => css`
      color: ${props.theme.mode === ThemeModes_Enum.LIGHT
        ? props.theme.colors["myWhite"]
        : props.theme.colors["secondary"]};
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

export const SFooterText = styled.div`
${tw`mt-[4dvh] `}
  p {
    ${tw`text-[.7rem] sm:text-[.8rem] md:text-[1rem]`}
    ${(props) => css`
      color: ${props.theme.colors["secondary"]};
    `}
  }
`;

export const SInputsWrapper = styled.div`
  ${tw`gap-y-[1dvh] sm:gap-y-[1.2rem] sm:mt-3 flex flex-col items-stretch w-[80%] last:w-auto text-center overflow-y-auto `}

  h4 {
    ${tw`text-[.7rem] sm:text-[.8rem] md:text-[.9rem] lg:text-[1rem] mt-1 `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }

  button {
    ${tw`duration-[50ms] sm:mt-9 text-[.8rem]`}
  }

  ::-webkit-scrollbar {
    ${tw`w-[4px] `}
  }
`;
