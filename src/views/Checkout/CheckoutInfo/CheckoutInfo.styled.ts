import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCheckoutInfo = styled.div`
  ${tw`w-fit sm:w-auto self-center sm:self-auto flex flex-col items-start gap-y-2 `}

  h2 {
    ${tw`text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.6rem] `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    span {
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }

  p {
    ${tw`whitespace-nowrap mt-6 flex items-start gap-x-3 `}

    input {
      ${tw`cursor-pointer w-[18px] aspect-square `}
    }
  }

  button {
    ${tw`w-full mt-9 `}
  }
`;
