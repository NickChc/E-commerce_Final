import styled from "styled-components";
import tw from "twin.macro";

export const SCartWishlist = styled.div`
  ${tw`max-h-[250px] sm:max-h-dvh overflow-y-auto sm:overflow-y-hidden w-full lg:w-[80%] flex flex-col items-center`}

  ::-webkit-scrollbar {
    ${tw`w-[3px] `}
  }

  h2 {
    ${tw`my-4 flex flex-row items-center gap-x-1 sm:gap-x-3 text-[.75rem] sm:text-[auto] `}

    span {
      ${tw`text-[1.4rem] sm:text-[1.8rem] `}
    }
  }
`;


export const SEmptyWishlist = styled.h1`
  ${tw`my-3 text-[1rem] md:text-[1.4rem] lg:text-[1.6rem] text-center `}
`
