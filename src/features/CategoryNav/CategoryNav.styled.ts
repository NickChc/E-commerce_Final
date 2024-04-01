import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SCategoryNavProps {
  show: boolean;
}

export const SCategoryNav = styled.div<SCategoryNavProps>`
  ${tw`flex flex-col items-center sm:items-start p-3 border-solid border h-dvh overflow-y-auto fixed left-0 z-10 overflow-hidden whitespace-nowrap border-y-0 transition-all ease-in-out duration-150`}
  ${(props) => css`
    ${props.show
      ? tw`w-full sm:w-[35vw] md:w-[30vw] lg:w-[20rem]  `
      : tw`w-0 p-0 border-none  `}
    border-color: ${props.theme.colors["additional"]};
    color: ${props.theme.colors["primary"]};
    background-color: #e0e0e0;
    ::-webkit-scrollbar {
      ${tw`w-[3px] `}
    }
  `}

  ul {
    ${tw`p-3 md:pl-6 flex flex-col items-stretch text-start gap-y-3  `}

    li {
      ${tw`mt-2 opacity-[.8] hover:opacity-[1] cursor-pointer flex sm:flex-row-reverse items-center justify-start sm:justify-between gap-x-3 rounded-lg pl-1 `}

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
        ${tw`max-w-[45px] sm:max-w-[40px] aspect-square p-2 rounded-md  `}
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
