import styled from "styled-components";
import tw from "twin.macro";

export const SPagination = styled.div`
  ${tw`flex items-center max-w-full overflow-hidden `}

  button {
    ${tw`mx-1 h-[2rem] `}
  }

  div {
    button {
      ${tw`aspect-square flex justify-center `}
    }
  }
`;
