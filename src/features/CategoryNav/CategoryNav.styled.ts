import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SCategoryNavProps {
  show: boolean;
}

export const SCategoryNav = styled.div<SCategoryNavProps>`
  ${tw`flex flex-col items-center sm:items-start px-3 pt-3 border-solid border h-dvh fixed left-0 z-30 overflow-hidden whitespace-nowrap border-y-0 transition-all ease-in-out duration-150 fixed top-0 bottom-0 z-20`}
  ${() =>
    window.screen.height > 1000
      ? tw`pt-32 sm:pt-40 lg:pt-24`
      : window.screen.height > 800
      ? tw`pt-32 sm:pt-40 lg:pt-24`
      : window.screen.height > 600
      ? tw`pt-32 sm:pt-44 md:pt-40 lg:pt-24`
      : window.screen.height > 400
      ? tw`pt-32 sm:pt-44 md:pt-24`
      : tw`pt-32 sm:pt-40 lg:pt-24`}


  ${(props) => css`
    ${props.show
      ? tw`w-full sm:w-[35vw] md:w-[30vw] lg:w-[20rem]`
      : tw`w-0 p-0 border-none  `}
    border-color: ${props.theme.colors["additional"]};
    color: ${props.theme.colors["primary"]};
    background-color: #e0e0e0;
  `}

  ul {
    ${tw`p-3 md:pl-6 flex flex-col items-stretch text-start gap-y-3 overflow-y-auto`}

    ::-webkit-scrollbar {
      ${tw`w-[3px] `}
    }

    li {
      ${tw`mt-1 sm:mt-2 opacity-[.8] hover:opacity-[1] cursor-pointer flex sm:flex-row-reverse items-center justify-start sm:justify-between gap-x-3 rounded-lg pl-1 `}

      @media(hover: hover) {
        :hover {
          ${(props) => css`
            background-color: ${props.theme.colors["secondary"]};
          `}

          span {
            ${(props) => css`
              color: ${props.theme.colors["additional"]};
            `}
          }
        }
      }

      a {
        ${tw`font-semibold text-[1.2rem] sm:text-[1rem] underline lg:text-[1.2rem] `}
        ${(props) => css`
          color: ${props.theme.colors["primary"]};
        `}

        :active {
          ${(props) => css`
            color: ${props.theme.colors["additional"]};
          `}
        }
      }

      img {
        ${tw`max-w-[35px] sm:max-w-[40px] aspect-square p-2 rounded-md  `}
        ${(props) => css`
          background-color: ${props.theme.colors["additional"]};
        `}
      }

      span {
        ${tw`rounded-full `}
        ${(props) => css`
          background-color: ${props.theme.colors["primary"]};
        `}
      }
    }
  }

  h1 {
    ${tw`text-[1.2rem] sm:text-[1rem] lg:text-[1.4rem] self-center `}
  }
`;
