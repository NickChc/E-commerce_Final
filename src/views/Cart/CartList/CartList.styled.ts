import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartList = styled.div`
  ${tw`flex flex-col items-stretch p-3 w-[95%] sm:w-[80%] lg:w-[50%] h-[320px] lg:h-auto lg:max-h-[50dvh] overflow-y-auto `}
`;

export const SEmptyView = styled.div`
  ${tw`flex flex-col items-center  lg:mt-[15dvh] lg:mt-20 text-[.6rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] `}

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
