import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SFilterProducts = styled.div`
  ${tw`w-[25vw] border-solid border border-y-0 border-l-0 flex flex-col items-center  justify-start gap-y-3 `}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
    background-color: ${props.theme.colors["secondary_background"]};
    color: ${props.theme.colors["secondary"]};
  `}

  h1 {
    ${tw`pb-9 p-3 text-[1.4rem] `}
  }

  p {
    ${tw`flex items-center gap-x-3 `}

    input {
      ${tw`mb-1 cursor-pointer `}
    }
  }
`;
