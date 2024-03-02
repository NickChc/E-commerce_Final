import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartInfo = styled.div`
  ${tw`flex flex-col justify-between py-4 p-3 w-[40%] h-[40dvh] border-solid border fixed border-t-0 right-[5%] rounded-b-lg rounded-t-[0]  `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}

  div {
    ${tw`gap-y-6 flex flex-col items-start `}
  }

  h1 {
    ${tw`flex items-start w-full justify-center gap-x-6 `}
  }

  h2 {
    ${tw`whitespace-nowrap `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    span {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;
