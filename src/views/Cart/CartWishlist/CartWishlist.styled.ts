import styled from "styled-components";
import tw from "twin.macro";

export const SCartWishlist = styled.div`
  ${tw`w-[95%] sm:w-[80%] lg:w-[50%] hidden lg:flex flex-col items-center `}

  h2 {
    ${tw`my-4 flex items-center gap-x-3 `}

    span {
      ${tw`text-[1.8rem] `}
    }
  }
`;
