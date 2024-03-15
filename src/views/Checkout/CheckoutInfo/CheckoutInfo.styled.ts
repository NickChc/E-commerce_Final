import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckoutInfo = styled.div`
  ${tw`flex flex-col items-start gap-y-2 fixed right-20 mt-[4em] `}

  h2 {
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
