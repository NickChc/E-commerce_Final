import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-full lg:w-[90%] min-h-dvh flex flex-col justify-start sm:flex-row items-start overflow-hidden `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background: ${props.theme.colors["secondary"]};
  `}


  hr {
    ${tw`min-w-full my-1 `}
  }
`;

export const SLeftSide = styled.div`
  ${tw`flex flex-col items-center w-full sm:w-[60%] sm:min-h-dvh border-none sm:border-solid border border-y-0 border-l-0 pr-1  `}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  h2 {
    ${tw`text-[1rem] `}
  }
`;

export const SCartInfoWrapperSm = styled.div`
  ${tw`flex flex-col justify-center w-full sm:hidden `}
`;

export const SRightSide = styled.div`
  ${tw`flex-col items-center w-full hidden sm:flex w-[40%] pl-1 min-h-full max-w-[40%]  `}
`;
