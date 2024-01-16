import styled from "styled-components";
import tw from "twin.macro";

export const SNotFound = styled.div`
  ${tw`w-full min-h-screen flex flex-col items-center text-center`}
  color: #4b4b4b;

  img {
    ${tw`w-[55%] max-h-[37em] mt-3`}
  }

  button {
    ${tw`w-[55%] m-6 p-3 border-solid border-2 rounded-lg cursor-pointer font-semibold text-lg transition-[0.3s]`}
    border-color: #1f51ff;
  }

  button:hover {
    color: #ffffff;
    background-color: #1f51ff;
  }
`;
