import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SListItem = styled.li`
  ${tw`w-full p-1 border-solid border border-x-0 border-b-0 flex items-center justify-between text-[.55rem] xs:text-[.7rem] sm:text-[.9rem] md:text-[1.2rem] pr-1.5 last:border-b `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_text"]};
  `}

  h4 {
    ${tw`whitespace-nowrap overflow-x-hidden flex flex-row items-center `}

    span {
      ${tw`grid place-items-center sm:min-w-[4rem] mt-0 text-[.55rem] xs:text-[.7rem] sm:text-[.9rem] md:text-[1.2rem] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }

  button {
    ${tw`px-[.55em] py-[.2rem] text-[.8rem] lg:text-[1rem] hidden sm:block border-solid border cursor-pointer duration-75 rounded-md `}
  }

  span {
    ${tw`block sm:hidden text-[1.2rem] mt-1 `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;
