import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProducts = styled.div`
  ${tw`w-full md:pr-6 min-h-dvh flex flex-col md:flex-row items-stretch `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SProductsLayout = styled.div`
  ${tw`w-full max-w-full overflow-hidden flex flex-col items-center justify-start mb-9`}

  h1 {
    ${tw`flex items-center justify-center gap-x-3 mt-20  text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem]`}
  }
`;

export const SProductsHolder = styled.div`
  ${tw`w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-14 gap-y-9 p-3 `}
`;

export const SEmptyWrapper = styled.div`
  ${tw`h-full w-full flex justify-center  `}

  div {
    ${tw`text-[5rem] sm:text-[7.5rem] md:text-[10rem] mt-20 flex flex-col gap-y-3 items-center `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}


    span {
      ${tw`text-[1.2rem] sm:text-[2rem] md:text-[2.8rem] whitespace-nowrap font-bold `}
    }
  }
`;
