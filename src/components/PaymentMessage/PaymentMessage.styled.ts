import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPaymentMessage = styled.div`
  ${tw`flex flex-col items-center `}

  div {
    ${tw`flex items-center justify-center xs:justify-around w-full overflow-hidden gap-x-3 mt-20 `}

    button {
      ${tw`duration-75 p-3 w-fit xs:w-[40%] `}
    }
  }

  h2 {
    ${tw`text-[.7rem] xs:text-[.8rem] md:text-[1.2rem] whitespace-nowrap `}
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
