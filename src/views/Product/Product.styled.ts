import styled, { css } from "styled-components";
import tw from "twin.macro";

interface PriceProps {
  isSale?: boolean;
}

export const SProduct = styled.div`
  ${tw`min-h-dvh w-full px-3 sm:w-[80%] flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background-color: ${props.theme.colors["secondary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;

export const SProductMainWrapper = styled.div`
  ${tw`w-full mt-2 md:mt-6 flex flex-col  justify-center sm:flex-row sm:items-start gap-x-3 `}
`;

export const SProductMain = styled.div`
  ${tw`w-[100%] sm:min-w-[45%] flex flex-col items-stretch `}

  img {
    ${tw`object-cover aspect-square w-full self-center sm:self-auto `}
  }
`;

export const SProductInfo = styled.div<PriceProps>`
  ${tw`flex flex-col gap-y-3 mt-3 px-1 sm:px-3 whitespace-nowrap relative sm:min-w-[55%] text-[.7rem] sm:text-[1rem] `}
  ${(props) => css`
    ${props.isSale && tw`pt-14 lg:pt-6`}
  `}
  

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
  ${tw`flex items-center gap-x-3 `}

  p {
    ${tw`whitespace-nowrap`}
  }
`;

export const STextTitle = styled.h2`
  ${(props) => css`
    color: ${props.theme.colors["secondary_text"]};
  `}
`;

export const SPrice = styled.h2<PriceProps>`
  ${tw` `}
  ${(props) => css`
    ${props.isSale ? tw`line-through ` : null}
    color: ${props.isSale ? "#8b8b8b" : ""};
  `}
`;

export const SSaleTag = styled.span`
  ${tw`absolute top-0 right-0 text-[1.2rem] sm:text-[1.5rem] `}
`;

export const SAdditionalInfo = styled.div`
  ${tw`w-full flex justify-around items-center text-[.75rem] md:text-[1rem] my-9 `}

  div {
    ${tw`flex-col md:flex-row whitespace-nowrap `}
  }

  hr {
    ${tw`h-[1.4rem] mx-1 sm:mx-3 block `}
  }
`;

export const SDoubleBtn = styled.div`
  ${tw`flex justify-stretch border-collapse `}
`;

export const SButtonsWrapper = styled.div`
  ${tw`flex flex-col items-stretch gap-y-3 mt-3 `}
`;
