import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductMain = styled.div`
  ${tw`w-[80%] sm:min-w-[45%] flex flex-col items-stretch `}

  img {
    ${tw`object-cover aspect-square w-full lg:w-[80%] self-center sm:self-auto `}
  }
`;

export const SButtonsWrapper = styled.div`
  ${tw`flex flex-col items-stretch gap-y-3 mt-3 `}
`;

export const SDoubleBtn = styled.div`
  ${tw`flex justify-stretch border-collapse `}
`;
