import styled from "styled-components";
import tw from "twin.macro";

export const SFooter = styled.div`
  ${tw`w-full p-9 h-[400px] flex items-start justify-around relative `}
  background-color: #1b1b1b;
  color: #1f51ff;

  div {
    ${tw`flex flex-col items-start justify-center `}
  }

  h2 {
    ${tw`m-3`}
  }

  hr {
    ${tw`w-[190px] h-[1px]`}
    color: #1f51ff;
  }

  ul {
    ${tw`flex flex-col  items-start justify-center`}
  }

  a {
    ${tw`m-3 no-underline flex items-center `}
    color: #1F51FF;
  }
`;
