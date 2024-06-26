import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartList = styled.div`
  ${tw`flex flex-col items-center min-h-[15rem] min-w-0 max-w-full p-3 w-full lg:w-[80%] `}

  h1 {
    ${tw`text-[1rem] xs:text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] mb-1 `}
  }
`;

export const SEmptyView = styled.div`
  ${tw`flex flex-col items-center lg:mt-14 text-[.6rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.8rem] `}

  span {
    ${tw`text-[8rem] mt-6 relative `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

      span {
      ${tw`text-[2rem] absolute top-[-20%] right-[-10%] w-[1.5em] h-[1.5em] rounded-[50%] flex items-center justify-center `}
      ${(props) => css`
        color: ${props.theme.colors["secondary"]};
        background: ${props.theme.colors["secondary_background"]};
      `}
    }
    h1 {
      ${tw`text-center font-bold mt-14 `}
    }
  }
`;
