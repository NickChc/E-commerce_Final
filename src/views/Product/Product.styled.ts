import styled, { css } from "styled-components";
import tw from "twin.macro";

interface PriceProps {
  isSale?: boolean;
}

export const SProduct = styled.div`
  ${tw`min-h-dvh w-full px-3 pb-6 sm:w-[80%] flex flex-col items-center`}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background-color: ${props.theme.colors["secondary"]};
  `}

  h5 {
    ${tw`h-[1rem] ml-3 flex gap-x-3 justify-start items-center `}

    span {
      ${tw`text-[1rem] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }

    a {
      ${tw`opacity-[.75] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}

      :hover {
        ${tw`opacity-[1] `}
      }
    }
  }

  h1 {
    ${tw`mt-14  `}
  }
`;

export const SProductMainWrapper = styled.div`
  ${tw`w-full mt-2 md:mt-6 flex flex-col items-center justify-center sm:flex-row sm:items-start gap-x-3 `}
`;

export const SProductInfo = styled.div<PriceProps>`
  ${tw`w-full overflow-x-hidden flex flex-col gap-y-3 mt-3 px-1 sm:px-3 whitespace-nowrap relative sm:min-w-[55%] text-[.7rem] sm:text-[1rem] `}
  ${(props) => css`
    ${props.isSale && tw`pt-14 lg:pt-9`}
  `}

   h2 {
    ${tw`text-[1rem] lg:text-[1.4rem] `}
  }

  p {
    ${tw`whitespace-normal `}
  }

  h4 {
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;

export const STextPair = styled.div`
  ${tw`flex items-start gap-x-3 `}

  p {
    ${tw`whitespace-nowrap `}
  }

  h3 {
    ${tw`whitespace-normal text-[.8rem] xs:text-[1rem] sm:text-[1.2rem] lg:text-[1.6rem]   `}
  }
`;

export const STextTitle = styled.h2`
  ${(props) => css`
    color: ${props.theme.colors["secondary_text"]};
  `}
`;

export const SPrice = styled.h2<PriceProps>`
  ${(props) => css`
    ${props.isSale ? tw`line-through scale-[.8] ` : null}
    color: ${props.isSale ? "#8b8b8b" : ""};
  `}
`;

export const SSaleTag = styled.span`
  ${tw`absolute top-0 right-0 text-[1.2rem] sm:text-[1.5rem] `}
`;

export const SAdditionalInfo = styled.div`
  ${tw`w-full flex justify-around items-center text-[.75rem] md:text-[1rem] mt-9 mb-[9] md:mb-16 `}

  div {
    ${tw`flex-col md:flex-row whitespace-nowrap `}
  }

  hr {
    ${tw`h-[1.4rem] mx-1 sm:mx-3 block `}
  }
`;
