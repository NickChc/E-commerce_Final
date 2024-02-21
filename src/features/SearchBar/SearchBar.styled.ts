import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SInputWrapper = styled.div`
  ${tw`flex justify-center items-stretch text-[1rem] my-[.2rem] lg:ml-6 w-[70%] md:w-[50%] lg:w-[40%] border-solid border rounded-xl relative `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}
`;

export const SInput = styled.input`
  ${tw`outline-none p-[.6em] text-[.75rem] sm:text-[1rem] lg:text-[1.2rem] rounded-r-xl border-none  w-full placeholder:font-bold `}
  ${(props) => css`
    caret-color: ${props.theme.colors["additional"]};
  `}
`;

export const SInputButton = styled.button`
  ${tw`outline-none p-[.6rem] px-[1rem] text-[.75rem] sm:text-[1rem] lg:text-[1rem] rounded-l-xl border-solid border border-y-0 border-l-0 flex items-center justify-center cursor-pointer `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary-background"]};
    color: ${props.theme.colors["additional"]};
  `}
`;
