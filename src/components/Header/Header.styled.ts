import styled from "styled-components";
import tw from "twin.macro";

export const SHeader = styled.div`
  ${tw`w-full p-3 bg-[#1b1b1b] sticky top-0 flex justify-between items-center border-b border-solid border-[#1F51FF] border-t-0 border-r-0 border-l-0`}

  div {
    ${tw`inline-flex  items-center justify-center gap-3 text-[#1F51FF]`}
  }
`;
