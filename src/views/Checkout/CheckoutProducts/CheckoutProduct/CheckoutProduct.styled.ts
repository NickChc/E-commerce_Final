import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckoutProduct = styled.div`
  ${tw` p-2 flex items-center gap-x-0 lg:gap-x-1 border-solid border rounded-xl shadow-lg `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}

  img {
    ${tw`w-[50px] sm:w-[65px] md:w-[75px] aspect-square `}
  }

  div {
    ${tw`flex flex-col items-start gap-y-1 sm:gap-y-3 w-[90%] truncate `}
  }

  h3 {
    ${tw`text-[.75rem] sm:text-[.85rem] md:text-[.9rem] lg:text-[1rem] max-w-[10rem] xs:max-w-full sm:max-w-[8rem] md:max-w-[95%] truncate `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

        span {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
    a {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;
