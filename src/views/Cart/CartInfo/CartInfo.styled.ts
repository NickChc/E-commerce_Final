import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartInfo = styled.div`
  ${tw`flex flex-col justify-between py-4 p-3 min-w-[30vw] w-[70%] md:w-auto md:w-[55vw] sm:w-[40%] min-h-[30dvh] lg:min-h-[40dvh] border-none lg:border-solid lg:border lg:fixed lg:border-t-0 lg:right-[5%] rounded-b-lg rounded-t-[0] mb-1 lg:px-6 z-20 `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: #d3d3d3;
  `}

  button {
    ${tw`mt-3 `}
  }

  div {
    ${tw`gap-y-3 lg:gap-y-6 flex flex-col items-center px-3 sm:px-6 md:px-9 md:w-[35vw] `}

    div {
      ${tw`flex flex-col items-start w-fit h-full `}
    }

    p {
      ${tw`text-[.55rem] sm:text-[.8rem] mt-6 mb-2  whitespace-nowrap self-center flex items-center gap-x-3 cursor-pointer `}

      @media(hover: hover) {
        :hover {
          ${(props) => css`
            color: ${props.theme.colors["myGreen"]};
          `}
        }
      }

      span {
        ${tw`text-[.8rem] sm:text-[1rem]  `}
      }
    }
  }

  h1 {
    ${tw`flex items-start w-full justify-center md:justify-start lg:justify-center gap-x-2 md:gap-x-6 text-[.9rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] whitespace-nowrap `}
  }

  h2 {
    ${tw`min-w-full whitespace-nowrap text-[.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]  `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    span {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;
