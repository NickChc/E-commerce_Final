import styled from "styled-components";
import tw from "twin.macro";

export const SHeader = styled.div`
  ${tw`w-full p-3 sticky top-0 flex justify-around items-center border-b border-solid border-t-0 border-r-0 border-l-0`}
  background-color: #1b1b1b;
  border-color: #1f51ff;

  h1 {
    color: #1f51ff;
  }

  div:nth-child(1) {
    ${tw`inline-flex items-center justify-center gap-3`}
  }

  div:nth-child(3) {
    ${tw`w-[30%] rounded-xl border-solid border flex items-stretch justify-center`}
    border-color: #1F51FF;
  }

  div:nth-child(4) {
    ${tw`flex items-center justify-center gap-3`}
  }

  input {
    ${tw`p-2 outline-none rounded-r-xl border-none w-[100%] text-lg`}
  }

  input::placeholder {
    ${tw`font-semibold`}
  }
`;

export const SSearchButton = styled.button`
  ${tw`p-3 rounded-l-xl border-none cursor-pointer text-[#1F51FF] outline-none`}
`;
