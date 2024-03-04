import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SCategoryNavProps {
  show: boolean;
}

export const SCategoryNav = styled.div<SCategoryNavProps>`
  ${tw`flex flex-col items-center sm:items-start p-3 border-solid border h-dvh fixed left-0 z-10 overflow-hidden whitespace-nowrap border-y-0 transition-all ease-linear duration-300 `}
  ${(props) => css`
    ${props.show
      ? tw`w-full sm:w-[35vw] md:w-[30vw] lg:w-[20rem]  `
      : tw`w-0 p-0 border-none  `}
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}

  ul {
    ${tw`p-3 sm:pl-9 flex flex-col items-start text-start w-fit `}

    li {
      ${tw`mt-2 opacity-[.8] hover:opacity-[1] cursor-pointer flex items-center gap-x-3 `}

      a {
        ${tw`font-semibold text-[1.2rem] sm:text-[1rem]  lg:text-[1.2rem] `}
        ${(props) => css`
          color: ${props.theme.colors["primary"]};
        `}

        :active {
          ${(props) => css`
            color: ${props.theme.colors["additional"]};
          `}
        }
      }
    }

    img {
      ${tw`max-w-[20px] aspect-square  `}
    }
  }

  h1 {
    ${tw`text-[1.2rem] sm:text-[1rem] lg:text-[1.4rem] self-center `}
  }
`;
