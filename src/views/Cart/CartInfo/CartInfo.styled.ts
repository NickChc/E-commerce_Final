import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartInfo = styled.div`
  ${tw`flex flex-col items-stretch w-full max-w-[70%] self-center sm:w-[70%] lg:w-[55%] xl:w-[90%] mt-3 px-1 px-3 mb-3 `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}

  button {
    ${tw`mt-3 p-[.5rem] `}
  }

  div {
    ${tw`gap-y-3 lg:gap-y-6 flex flex-col items-center  `}

    div {
      ${tw`flex flex-col items-start w-fit h-full `}
    }

    p {
      ${tw`text-[.65rem] sm:text-[.8rem] mt-6 mb-2  whitespace-nowrap self-center flex items-center gap-x-3 cursor-pointer  `}

      @media(hover: hover) {
        :hover {
          ${(props) => css`
            color: ${props.theme.colors["additional"]};
          `}
        }
      }

      span {
        ${tw`text-[.8rem] sm:text-[1rem]  `}
      }
    }
  }

  h1 {
    ${tw`flex items-start w-full justify-center md:justify-start lg:justify-center gap-x-2 md:gap-x-6 text-[1rem] xs:text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] whitespace-nowrap `}
  }

  h2 {
    ${tw`min-w-full font-semibold whitespace-nowrap text-[.8rem] sm:text-[.9rem] md:text-[1rem] xl:text-[1.4rem]  `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}

    span {
      ${tw`font-bold `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;
