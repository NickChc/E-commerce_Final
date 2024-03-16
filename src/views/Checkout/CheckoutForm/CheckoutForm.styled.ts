import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckoutFormWrapper = styled.div`
  ${tw`flex flex-col items-center `}
`;

interface CheckoutFormProps {
  formOpen: boolean;
}

export const SFormHideLink = styled.a`
  ${tw`underline cursor-pointer self-end mr-9 mt-1 sm:mt-6 `}
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
  ${tw`flex flex-col items-stretch transition-all duration-300 ease-in-out overflow-hidden max-w-[95vw]  `}
  ${(props) =>
    props.formOpen ? tw`gap-y-4 mt-6 md:mt-14 max-h-full` : tw`max-h-0`}

  input {
    ${tw`font-bold text-[.8rem] `}
  }

  p {
    ${tw`text-[.75rem]  `}
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
