import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SMinMaxRange = styled.div`
  ${tw`flex flex-col items-stretch w-full p-3 mt-6 `}

  h4 {
    ${tw`md:text-[.75rem] lg:text-[1rem] self-center mb-4 `}
  }
`;

export const SSliderHolder = styled.div`
  ${tw` mb-6 mt-3 `}
  div:first-child {
    ${tw`h-[4px] w-[95%] `}
    ${(props) => css`
      background-color: ${props.theme.colors["additional"]};
    `}

    .thumb {
      ${tw`w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] rounded-[50%] cursor-grab active:cursor-grabbing border-solid border top-[50%] translate-y-[-50%] outline-none`}
      ${(props) => css`
        background: ${props.theme.colors["additional"]};
        border-color: ${props.theme.colors["secondary"]};
      `}
    }

    .track-1 .track-0 .track {
      ${tw`bg-[red] cursor-pointer `}
    }
  }
`;

export const SMinMaxWrapper = styled.div`
  ${tw`flex items-center justify-between text-center whitespace-nowrap text-[.9rem] `}
`;
