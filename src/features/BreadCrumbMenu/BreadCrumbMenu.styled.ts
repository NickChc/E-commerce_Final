import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SBreadCrumbMenu = styled.div`
  ${tw`w-full flex flex-col  gap-x-3 p-2 overflow-x-hidden  `}

  nav {
    ${tw`w-full flex items-center justify-center gap-x-1 sm:gap-x-3 mb-[.5rem] overflow-x-hidden `}
  }

  a {
    ${tw`no-underline font-semibold text-[.9rem] sm:text-[1.2rem] lg:text-[1.5rem] 2xl:text-[1.8rem] w-fit last:w-fit last:truncate  `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    :hover {
      color: #4b4b4b;
    }

    :active {
      ${(props) => css`
        color: ${props.theme.colors["additional"]};
      `}
    }
  }

  hr {
    ${tw`w-full`}
  }
`;
