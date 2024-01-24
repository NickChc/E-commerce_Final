import styled, { css } from "styled-components";
import tw from "twin.macro";
import "google-fonts";

export const SHeader = styled.div`
  ${tw`w-full p-1 sm:p-3 z-10 sticky top-0 flex flex-col lg:flex-row justify-around items-center border-b border-solid border-t-0 border-r-0 border-l-0`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_background"]};
    border-color: ${props.theme.colors["additional"]};
  `}

  h1 {
    ${tw`text-[1.5em] sm:text-[2em] md:text-[2em] lg:text-[1.5em] xl:text-[2em]`}
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }

  input {
    ${tw`p-2 outline-none rounded-r-xl border-none w-[100%] text-lg caret-[#1f51ff]`}
  }

  input::placeholder {
    ${tw`font-semibold`}
  }
`;

export const SBtnsWrapper = styled.div`
  ${tw`w-full px-9 md:w-auto flex items-stretch justify-around lg:justify-center gap-x-1 sm:gap-x-3`}

  button:nth-child(3) {
    ${tw`flex lg:hidden`}
  }
`;
export const SInputHolder = styled.div`
  ${tw`w-full my-3 md:w-[70%] lg:w-[30%] rounded-xl border-solid border flex items-stretch justify-center`}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}
`;

export const SSearchButton = styled.button`
  ${tw`p-3 rounded-l-xl border-none cursor-pointer outline-none`}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}
`;

export const SHeadlineWrapper = styled.div`
  ${tw`inline-flex items-center justify-center gap-3`}
  div {
    ${tw`inline-flex items-center justify-center`}
  }

  h1 {
    font-family: Oswald, sans-serif;
  }
`;

export const SNavWrapper = styled.div`
  ${tw`hidden lg:block`}
`;
