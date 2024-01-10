import styled from "styled-components";
import tw from "twin.macro";

export const SHeader = styled.div`
  ${tw`w-full p-1 sm:p-3 z-10 sticky top-0 flex flex-col lg:flex-row justify-around items-center border-b border-solid border-t-0 border-r-0 border-l-0`}
  background-color: #1b1b1b;
  border-color: #1f51ff;

  h1 {
    ${tw`text-[1.5em] sm:text-[2em] md:text-[2em] lg:text-[1.5em] xl:text-[2em]`}
    color: #1f51ff;
  }

  input {
    ${tw`p-2 outline-none rounded-r-xl border-none w-[100%] text-lg`}
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
  border-color: #1F51FF;
`;

export const SSearchButton = styled.button`
  ${tw`p-3 rounded-l-xl border-none cursor-pointer text-[#1F51FF] outline-none`}
`;

export const SHeadlineWrapper = styled.div`
  ${tw`inline-flex items-center justify-center gap-3`}
  div {
    ${tw`inline-flex items-center justify-center`}
  }
`;

export const SNavWrapper = styled.div`
  ${tw`hidden lg:block`}
`;
