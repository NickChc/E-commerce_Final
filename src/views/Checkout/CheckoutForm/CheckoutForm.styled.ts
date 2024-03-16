import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CheckoutFormProps {
  formOpen: boolean;
}

export const SFormHideLink = styled.a`
  ${tw`self-center underline cursor-pointer `}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}


  :active {
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }
`;

export const SCheckoutForm = styled.form<CheckoutFormProps>`
  ${tw`flex flex-col items-stretch transition-all duration-300 overflow-hidden `}
  ${(props) => (props.formOpen ? tw`gap-y-4 mt-20 max-h-full` : tw`max-h-0`)}

  input {
    ${tw`font-bold text-[.8rem] `}
  }

  button {
    ${tw`mt-6 `}
  }
`;

export const SDoubleInput = styled.div`
  ${tw`flex flex-row items-stretch justify-between gap-y-4 `}

  div {
    ${tw`w-[50%] `}
  }
`;
