import { createGlobalStyle } from "styled-components";
// import BG_1 from '../assets/BG.png';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        margin:0;
        padding:0;
        border:0;
        font-family: 'Titillium Web', sans-serif;
        font-style: normal;
        color: #fff;
        &::-webkit-scrollbar {
            display: none;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        ol, ul {
            list-style: none;
        }
    }

    img {
      user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    body{
        color: #fff;
        background-image: url('https://undergroundsound.eu/wp-content/uploads/2021/08/MO2.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    
    :root {
        font-size: 100%;
        --primary: #01C6A0;
        --primary-border: rgba(1, 198, 160, 0.1);
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .glass {
        background: rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
`;
