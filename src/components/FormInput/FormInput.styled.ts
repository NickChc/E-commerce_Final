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

  p {
    ${tw`absolute bottom-[-35%] left-[50%] translate-x-[-50%] whitespace-nowrap `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;

interface FormInputProps {
  error: boolean;
}

export const SFormInput = styled.input<FormInputProps>`
  ${tw`p-[.6rem] text-[.7rem] md:text-[.8rem] lg:text-[.9rem] xl:text-[1rem] 2xl:text-[1.2rem] m-1 placeholder:font-semibold rounded-xl border-solid border outline-none `}
  ${(props) => css`
    border-color: ${props.error
      ? props.theme.colors["saleClr"]
      : props.theme.colors["additional"]};
  `}
`;

interface STogglePasswordProps {
  showPassword: boolean;
}

export const STogglePassword = styled.span<STogglePasswordProps>`
  ${tw`absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer text-[1rem] lg:text-[1.3rem] flex items-center justify-center `}
  ${(props) => css`
    color: ${props.showPassword && props.theme.colors["additional"]};
  `}
`;
