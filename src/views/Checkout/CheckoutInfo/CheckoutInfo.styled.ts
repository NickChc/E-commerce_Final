import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckoutInfo = styled.div`
  ${tw`flex flex-col items-start gap-y-2 mt-[4em] `}

  h2 {
    ${tw`text-[.8rem] sm:text-[.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    span {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }

  button {
    ${tw`w-full mt-9 `}
  }
`;
