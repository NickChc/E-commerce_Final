import styled, { css } from "styled-components";
import tw from "twin.macro";

interface FilterProductsProp {
  show?: boolean;
}

export const SFilterProducts = styled.div<FilterProductsProp>`
  ${tw`w-full md:w-[35vw] lg:w-[25vw] border-none md:border-solid border border-y-0 border-l-0 border flex flex-col items-center md:justify-start gap-y-3 transition-all ease-linear duration-500 overflow-hidden `}
  ${(props) => css`
    ${props.show
      ? tw`min-h-[40dvh] max-h-[60dvh] md:min-h-full md:max-h-full justify-between`
      : tw`min-h-[1.2rem] max-h-[1.6rem] md:max-h-full justify-end`}
    border-color: ${props.theme.colors["primary"]};
    background-color: ${props.theme.colors["secondary_background"]};
    color: ${props.theme.colors["secondary"]};
  `}

  h1 {
    ${tw`md:pb-6 pt-4 text-[1.2rem] sm:text-[1.4rem] md:text-[1.2rem] whitespace-nowrap mb-3 `}
  }

  h2 {
    ${tw`text-[.9rem] md:text-[1rem] md:mb-9 text-center `}
  }

  h3 {
    ${tw`block md:hidden cursor-pointer `}
  }

  h4 {
    ${tw`flex items-center gap-x-3 md:text-[.75rem] lg:text-[1rem]  `}
    input {
      ${tw`mb-1 cursor-pointer w-[18px] aspect-square `}
    }
  }

  hr {
    ${tw`w-[90%] my-4 `}
  }
`;

export const SViewContainer = styled.div<FilterProductsProp>`
  ${tw`md:flex flex-col items-center  `}
  ${(props) => (props.show ? tw`flex ` : tw`hidden `)}
`;

export const SOpen = styled.div`
  ${tw`text-center py-[.2rem] w-full block md:hidden cursor-pointer border-solid border border-x-0 text-[.8rem] `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_text"]};
    border-color: ${props.theme.colors["secondary_background"]};
  `}
`;
