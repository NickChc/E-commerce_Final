import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";

const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SLoadingScreen = styled.div`
  ${tw`w-full min-h-dvh text-[2rem] `}

  & > header {
    ${tw`px-4 py-9 duration-500 w-full sticky top-0 right-0 left-0 overflow-hidden flex justify-between `}
    ${(props) => css`
      background-image: linear-gradient(
        90deg,
        ${props.theme.colors["primary"]} 20%,
        ${props.theme.colors["primary"]} 50%,
        ${props.theme.colors["secondary"]} 65%,
        ${props.theme.colors["primary"]} 80%
      );
      background-size: 200% 100%;
      animation: ${shine} 5000ms infinite linear;
    `}
  }

  & > main > h1 {
    ${tw`mt-20 md:mt-40 gap-x-3 flex items-center justify-center text-3xl md:text-5xl lg:text-7xl`}
  }
`;
