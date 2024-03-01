import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProfile = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex flex-col items-center px-2 md:py-9 lg:py-20 `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}

  hr {
    ${tw`my-14 w-full `}
  }

  h1 {
    ${tw`text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }
`;

export const SUserLayer = styled.div`
  ${tw`w-full flex flex-col items-center gap-y-6 md:gap-y-9 lg:flex-row lg:items-start  lg:justify-around mt-3 md:mt-14   `}
`;
