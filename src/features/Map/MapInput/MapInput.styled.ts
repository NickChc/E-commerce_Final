import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SMapInputForm = styled.form`
  ${tw`flex items-stretch justify-center mb-3 `}

  input {
    ${tw`border-solid border rounded-l-xl rounded-r-[0] outline-none p-[.65rem] text-[.8rem] sm:text-[1rem] `}
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

export const SMapInputWrapper = styled.div`
  p {
    ${tw`h-[1.2rem] my-[.2rem] `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;
