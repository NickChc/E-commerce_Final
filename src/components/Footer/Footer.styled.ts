import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SFooter = styled.div`
  ${tw`w-full flex flex-col items-center justify-center relative z-20 border-solid border border-x-0 border-b-0 `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_background"]};
    border-color: ${props.theme.colors["secondary_text"]};
  `}

  p {
    ${tw`text-[.8em] sm:text-[.9em] p-3`}
    color: #8b8b8b;
  }
`;

export const SFooterInfo = styled.div`
  ${tw`w-full py-9 h-[400px] flex items-start justify-around `}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}

  h2 {
    ${tw`m-3 text-[1rem] sm:text-lg md:text-2xl`}
  }

  hr {
    ${tw`w-full h-[1px]`}
  }

  ul {
    ${tw`flex flex-col  items-start justify-center`}
  }

  a {
    ${tw`m-3 no-underline flex items-center text-[0.8em] sm:text-[1em] shrink hover:underline `}
    ${(props) => css`
      color: ${props.theme.mode === "DARK" ? "#6b6b6b" : "#ffffff"};
    `}
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
  ${(props) => css`
    background-color: ${props.theme.colors["additional"]};
    border-color: ${props.theme.colors["additional"]};
  `}
`;
