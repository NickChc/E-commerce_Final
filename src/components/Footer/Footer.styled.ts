import styled from "styled-components";
import tw from "twin.macro";

export const SFooter = styled.div`
  ${tw`w-full flex flex-col items-center justify-center relative `}
  background-color: #1b1b1b;
  color: #1f51ff;

  p {
    ${tw`text-[.8em] p-3`}
    color: #8b8b8b;
  }
`;

export const SFooterInfo = styled.div`
  ${tw`w-full py-9 h-[400px] flex items-start justify-around `}
  color: #1f51ff;

  h2 {
    ${tw`m-3 text-[1rem] sm:text-lg md:text-2xl`}
  }

  hr {
    ${tw`max-w-full w-full h-[1px]`}
    color: #1f51ff;
  }

  ul {
    ${tw`flex flex-col  items-start justify-center`}
  }

  a {
    ${tw`m-3 no-underline flex items-center text-[0.8em] sm:text-[1em] shrink `}
    color: #ffffff;
  }
`;

export const SBottomText = styled.div`
  ${tw`w-full min-h-[5em] flex items-end justify-start`}
`;

export const SInfobar = styled.div`
  ${tw`w-[40%] sm:w-auto inline-flex flex-col items-center justify-center`}
`;

export const SLine = styled.div`
  ${tw`w-full border-solid border mb-9 sm:mb-0`}
  background-color: #1F51FF;
  border-color: #1f51ff;
`;
