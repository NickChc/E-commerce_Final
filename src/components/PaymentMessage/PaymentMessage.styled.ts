import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPaymentMessage = styled.div`
  ${tw`flex flex-col items-center `}

  div {
    ${tw`flex items-center justify-around w-full  gap-x-3 w-[50%] mt-20`}

    button {
      ${tw`duration-75 p-3 w-[40%] `}
    }
  }

  h2 {
    ${tw`text-[.8rem] md:text-[1.2rem] whitespace-nowrap `}
  }

  p {
    ${tw`my-4 text-[.9rem] md:text-[1rem] text-center `}
  }

  a {
    ${tw` `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}


    :active:hover {
      ${(props) => css`
        color: ${props.theme.colors["additional"]};
      `}
    }

    @media (hover: hover) {
      :hover {
        ${(props) => css`
          color: ${props.theme.colors["secondary_background"]};
        `}
      }
    }
  }
`;
