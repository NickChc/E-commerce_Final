import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SFormInpuLabel = styled.label`
  ${tw`flex flex-col items-stretch  `}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
  `}
`;

export const SFormSpan = styled.span`
  ${tw`relative flex flex-col items-stretch `}
`;

export const SFormInput = styled.input`
  ${tw`p-[.6rem] text-[.7rem] md:text-[.8rem] lg:text-[.9rem] xl:text-[1rem] 2xl:text-[1.2rem] m-1 placeholder:font-semibold rounded-xl border-solid border outline-none `}
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}
`;
