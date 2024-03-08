import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProducts = styled.div`
  ${tw`w-full md:pr-6 min-h-dvh flex flex-col md:flex-row items-stretch `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SProductsLayout = styled.div`
  ${tw`w-full max-w-full overflow-hidden flex flex-col items-center justify-between mb-9`}
`;

export const SProductsHolder = styled.div`
  ${tw`w-full grid grid-cols-repeat-15 pb-14 gap-y-9 p-3 `}

  h1 {
    ${tw`self-center text-center mt-9 `}
  }
`;

export const SEmptyWrapper = styled.div`
  ${tw`h-full flex items-center justify-center `}
`;
