import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPaymentSuccess = styled.div`
  ${tw`w-full min-h-dvh flex flex-col items-center text-center mt-14 `}

  img {
    ${tw`h-[40dvh] max-w-[500px] aspect-[1.2 / 1] object-cover `}
  }

  div {
    ${tw`flex flex-col items-stretch gap-y-3 px-2 `}
  }

  h1 {
    ${tw`text-[1.2rem] sm:text-[2.5rem] my-3  `}
  }

  h3 {
    ${tw`text-[1rem] sm:text-[1.4rem] `}
  }

  a {
    ${(props) => css`
      color: ${props.theme.colors["secondary_background"]};
      :hover {
        color: ${props.theme.colors["additional"]};
      }
    `}


  }

  button {
    ${tw`rounded-md duration-75 `}
  }
`;
