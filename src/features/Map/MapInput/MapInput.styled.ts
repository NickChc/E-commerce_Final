import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SMapInput = styled.div`
  ${tw`flex items-stretch justify-center mb-3 `}

  input {
    ${tw`border-solid border rounded-l-xl outline-none p-[.65rem] text-[.8rem] sm:text-[1rem]  `}
    ${(props) => css`
      border-color: ${props.theme.colors["additional"]};
    `}
  }

  button {
    ${tw`border-solid border rounded-r-xl border-l-0 p-[.8rem] cursor-pointer w-[4rem] grid place-items-center  `}
    ${(props) => css`
      border-color: ${props.theme.colors["additional"]};
      color: ${props.theme.colors["additional"]};
    `}

    :disabled {
      ${tw`cursor-default opacity-[.5] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}

      :active {
        ${(props) => css`
          color: ${props.theme.colors["primary"]};
        `}
      }
    }

    :active {
      ${(props) => css`
        color: ${props.theme.colors["additional"]};
      `}
    }
  }
`;
