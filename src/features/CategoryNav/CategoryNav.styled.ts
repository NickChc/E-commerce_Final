import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SCategoryNavProps {
  show: boolean;
}

export const SCategoryNav = styled.div<SCategoryNavProps>`
  ${tw`flex flex-col items-start p-3 border-solid border h-dvh fixed left-0 z-10 overflow-hidden whitespace-nowrap border-y-0 transition-all ease-linear duration-300 `}
  ${(props) => css`
    ${props.show
      ? tw`w-full sm:w-[35vw] md:w-[30vw] lg:w-[25vw]  `
      : tw`w-0 p-0 border-none  `}
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}

  ul {
    ${tw`p-3 w-full `}

    li {
      ${tw`mt-2 `}

      a {
        ${tw`font-semibold opacity-[.8] hover:opacity-[1] text-[1.2rem] sm:text-[1rem]  lg:text-[1.2rem] `}
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
  }

  h1 {
    ${tw`text-[1.2rem] sm:text-[1rem] lg:text-[1.4rem] `}
  }
`;
