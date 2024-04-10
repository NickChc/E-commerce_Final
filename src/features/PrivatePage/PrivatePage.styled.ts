import styled from "styled-components";
import tw from "twin.macro";

export const SNavigateWrapper = styled.div`
  ${tw`min-h-dvh w-full flex items-center justify-center text-[2rem] sm:text-[3rem] md:text-[4rem] pb-20 gap-x-6 `}
  h1 {
    ${tw`text-[1.5rem] sm:text-[3rem] `}
  }
`;
