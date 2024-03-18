import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckout = styled.div`
  ${tw`w-full md:w-[90%] lg:w-[80%] min-h-dvh flex flex-col sm:flex-row justify-between relative `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SLeftSide = styled.div`
  ${tw`w-full sm:w-[60%] flex flex-col items-stretch sm:gap-y-9 px-3 sm:px-3 ml-0 `}

  h1 {
    ${tw`mt-2 sm:mt-6 text-center text-[1.2rem] lg:text-[1.5rem] `}
  }
`;

export const SRightSide = styled.div`
  ${tw`w-full sm:w-[40%] flex flex-col items-stretch gap-y-6 sm:gap-y-14 px-3 sm:px-6 border-solid border border-y-0 border-r-0 border-l-0 sm:border-l-[1px] py-6 `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_text"]};
  `}

  h1 {
    ${tw`text-center text-[1.4rem] md:text-[1.6rem] xl:text-[1.8rem] `}
  }

  hr {
    ${tw`w-full `}
  }
`;
