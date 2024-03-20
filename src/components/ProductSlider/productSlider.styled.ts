import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductSliderWrapper = styled.div`
  ${tw`w-full border-solid py-3 border-solid border border-[grey] border-x-0 border-t-0 z-10 `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
  `}

  h1 {
    ${tw`text-center text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] mb-1`}
  }
`;
