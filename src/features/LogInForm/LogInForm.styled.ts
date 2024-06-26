import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SLogInForm = styled.form`
  ${tw`flex flex-col items-center justify-between w-full h-fit text-center pb-6 px-3 `}
  ${(props) => css`
    color: ${props.theme.colors["secondary"]};
  `}

  h4 {
    ${tw`text-[.7rem] sm:text-[.8rem] md:text-[.9rem] lg:text-[1rem] mt-1 `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }

  h3 {
    ${tw`text-[.75rem] md:text-[1rem] xl:text-[1.5rem] whitespace-nowrap  `}
    ${(props) => css`
      color: ${props.theme.colors["secondary"]};
    `}
  }

  p {
    ${tw`justify-self-end whitespace-nowrap text-[.7rem] sm:text-[.85rem] md:text-[1rem] `}
    ${(props) => css`
      color: ${props.theme.colors["secondary"]};
    `}
  }

  a {
    ${tw`font-semibold whitespace-nowrap underline cursor-pointer `}

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
  ${tw`flex flex-col items-stretch gap-y-4 min-w-full text-[1.4rem] last:mt-6 `}

  button {
    ${tw`duration-[50ms] lg:text-[1.2rem] `}
  }
`;

export const SFormContent = styled.div`
  ${tw`flex flex-col items-stretch justify-between w-full sm:w-auto h-fit mt-6 `}
`;
