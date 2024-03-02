import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-[90%] pb-14 min-h-dvh flex flex-col items-center lg:items-start relative `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background: ${props.theme.colors["secondary"]};
  `}
`;

export const SCartInfoWrapperSm = styled.div`
  ${tw`flex flex-col items-center justify-center lg:hidden w-full  `}

  hr {
    ${tw`w-full mb-3 md:mb-9 `}
  }
`;

export const SCartInfoWrapperLg = styled.div`
  ${tw`hidden lg:block fixed `}
`;
