import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SThemeSelect = styled.span`
  ${tw`p-[.3rem] cursor-pointer transition-all duration-200 flex items-center justify-center text-[1rem] sm:text-[1rem] lg:text-[1.2rem]`}
  ${(props) => css`
    color: ${props.theme.colors["myGray"]};
  `}

  :hover {
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }
`;
