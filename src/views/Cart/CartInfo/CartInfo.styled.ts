import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartInfo = styled.div`
  ${tw`flex flex-col justify-between py-4 p-3 w-[55vw] max-w-[12rem] md:max-w-full sm:w-[40%] min-h-[27.5dvh] md:min-h-[35dvh] lg:min-h-[40dvh] border-none  lg:border-solid lg:border lg:fixed lg:border-t-0 lg:right-[5%] rounded-b-lg rounded-t-[0] mb-1 lg:px-6  `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary"]};
  `}

  div {
    ${tw`gap-y-3 lg:gap-y-6 flex flex-col items-start  `}
  }

  h1 {
    ${tw`flex items-start w-full justify-center gap-x-2 md:gap-x-6 text-[.9rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] whitespace-nowrap `}
  }

  h2 {
    ${tw`whitespace-nowrap text-[.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]  `}
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
