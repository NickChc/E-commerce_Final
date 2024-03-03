import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SCategoryNavProps {
  show: boolean;
}

export const SCategoryNav = styled.div<SCategoryNavProps>`
  ${tw`flex flex-col items-start p-3 border-solid border h-dvh fixed left-0 z-10 overflow-hidden whitespace-nowrap border-y-0 transition-all ease-linear duration-300 `}
  ${(props) => css`
    ${props.show
      ? tw`w-full md:w-[25vw] lg:w-[20vw] p-3  `
      : tw`w-0 p-0 border-none  `}
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    /* transition: all 0.4s linear; */
  `}


  h1 {
    ${tw`text-[1.2rem] `}
  }
`;
