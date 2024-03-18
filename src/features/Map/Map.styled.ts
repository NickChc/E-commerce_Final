import styled from "styled-components";
import tw from "twin.macro";

export const SMapContainer = styled.div`
  ${tw`w-full my-9 sm:w-[80%] rounded-xl self-center text-center `}

  h4 {
    ${tw`my-2 text-[.8rem] xs:text-[.9rem] sm:text-[1rem] whitespace-nowrap `}
  }
`;
