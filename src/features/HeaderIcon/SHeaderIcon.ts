import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SHeaderIcon = styled.div`
  ${tw`text-3xl sm:text-3xl xl:text-4xl`}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}
`;
