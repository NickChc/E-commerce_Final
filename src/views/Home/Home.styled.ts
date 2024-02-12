import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SHome = styled.div`
  ${tw`w-[80%] min-h-screen flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;
