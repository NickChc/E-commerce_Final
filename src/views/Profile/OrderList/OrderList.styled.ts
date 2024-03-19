import styled from "styled-components";
import tw from "twin.macro";

export const SOrderList = styled.ul`
  ${tw`w-full flex flex-col items-center max-h-[200px] overflow-y-auto mt-6 mb-3 `}

  h2 {
    ${tw`text-[1rem] xs:text-[1.2rem] md:text-[1.4rem] 2xl:text-[1.6rem] `}
  }
`;
