import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProfile = styled.div`
  ${tw`w-[80%] min-h-dvh flex flex-col items-center px-2 md:py-9 lg:py-20 text-center `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;

export const SUserLayer = styled.div`
  ${tw`w-full flex flex-col items-center gap-y-6 md:gap-y-9 lg:flex-row lg:items-start  lg:justify-around mt-3 md:mt-14   `}
`;
