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
  ${tw`w-full max-w-full overflow-hidden flex flex-col items-center justify-between mb-9`}
`;

export const SProductsHolder = styled.div`
  ${tw`w-full grid grid-cols-repeat-15 pb-14 gap-y-9 p-3 `}

  h1 {
    ${tw`self-center text-center mt-9 `}
  }
`;

export const SEmptyWrapper = styled.div`
  ${tw`h-full flex flex-col gap-y-14 items-center justify-center `}

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
