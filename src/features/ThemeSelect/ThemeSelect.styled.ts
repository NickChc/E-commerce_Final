import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SThemeSelect = styled.span`
  ${tw`p-[.3rem] cursor-pointer transition-all duration-200 flex items-center justify-center text-[1rem] sm:text-[1rem] lg:text-[1.2rem]`}
  color: #8b8b8b;

  :hover {
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }
`;
