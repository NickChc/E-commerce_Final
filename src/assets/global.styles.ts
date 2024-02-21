import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export default createGlobalStyle`
    * {
        ${tw`m-0 p-0 box-border`}
    }

    :root {
        ${tw`text-[16px]`}
        font-family: sans-serif;
    }

    ::-webkit-scrollbar {
        ${tw`w-[.5rem]`}
        background-color: #E0E0E0;
    }

    ::-webkit-scrollbar-track {
        background-color: #E0E0E0;
    }

    ::-webkit-scrollbar-thumb {
        ${tw`rounded-2xl w-full`}
        background-color: #8b8b8b;

        :hover {
            background-color: #6b6b6b;
        }

        :active {
            background-color: #4b4b4b;
        }
    }
`;
