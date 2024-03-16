import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckout = styled.div`
  ${tw`w-full md:w-[80%] min-h-dvh flex flex-col sm:flex-row justify-between relative `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SLeftSide = styled.div`
  ${tw`w-full sm:w-[50%] flex flex-col items-stretch gap-y-6 sm:gap-y-9 px-3 sm:px-6 sm:ml-6 `}

  h1 {
    ${tw`mt-6 text-center `}
  }
`;

export const SRightSide = styled.div`
  ${tw`w-full sm:w-[50%] flex flex-col items-stretch gap-y-6 sm:gap-y-14 px-3 sm:px-6 mr-3 sm:mr-9 border-solid border border-y-0 border-r-0 border-l-0 sm:border-l-[1px] py-6 `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_background"]};
  `}

  hr {
    ${tw`w-full `}
  }
`;
