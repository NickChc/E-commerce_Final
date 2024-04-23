import styled from "styled-components";
import tw from "twin.macro";

export const SLoadingScreen = styled.div`
  ${tw`w-full min-h-dvh grid place-items-center text-[2rem] `}

  h1 {
    ${tw`flex items-center gap-x-3 `}
  }
`;
