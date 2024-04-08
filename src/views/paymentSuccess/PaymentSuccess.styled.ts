import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPaymentSuccess = styled.div`
  ${tw`w-full min-h-dvh flex flex-col items-center text-center mt-14 `}

  img {
    ${tw`h-[40dvh] aspect-[1.2 / 1] object-cover `}
  }

  div {
    ${tw`flex flex-col items-stretch gap-y-3 `}
  }

  h1 {
    ${tw`text-[2.5rem] my-3  `}
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
