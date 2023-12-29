import styled from "styled-components";
import tw from "twin.macro";


export const SSelectWrapper = styled.div`
  ${tw`inline-flex justify-center absolute bottom-0 right-0 w-[20%]`}

  h4 {
    ${tw`absolute right-[70px] bottom-[35px] mx-3 `}
  }

  img {
    ${tw`absolute right-[32px] bottom-[35px] w-[30px] h-[20px] z-10`}
    pointer-events: none;
  }
`;

export const SSelectLang = styled.select`
  ${tw`absolute right-6 bottom-6 p-3 outline-none appearance-none cursor-pointer border-solid border font-semibold `}
  background-color: grey;
  border-color: #1f51ff;
  color: #ffffff;


`;
