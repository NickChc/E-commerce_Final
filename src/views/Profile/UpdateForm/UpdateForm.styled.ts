import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SEditProps {
  editing: boolean;
}

export const SUpdateForm = styled.form<SEditProps>`
  ${tw`mb-9 w-[90%] lg:w-[35%] border-solid border rounded-md h-[25dvh] md:h-[20dvh] p-3 pt-1 pb-6 flex flex-col items-stretch justify-between text-center origin-top lg:origin-top-left fixed sm:static top-[10%] z-10 `}

  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary_text"]};
    color: #8b8b8b;
    transform: scale(${props.editing ? "1" : "0"});
    transition: transform 0.2s;
  `}

  div {
    ${tw`flex flex-col items-stretch gap-y-5 `}
  }

  h4 {
    ${tw`h-[1rem] text-[.7rem] whitespace-nowrap `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }

  p {
    ${tw`text-[.8rem] md:text-[1rem] `}
  }
`;
