import styled from "styled-components";

export const AppView = styled.div`
    flex-direction: column;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: .5em;

    & > img {
        width: 100vw;
        height: 100vh;
        filter: blur(12px) brightness(.75);
        position: absolute;
        z-index: 1;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;
    position: relative;
    z-index: 2;
    padding: 1em;

    & > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 3em;
        gap: 1em;

        & > .label {
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            font-weight: 700;
        }
    }
`

export const Input = styled.input`
    padding: 0.5em;
    background-color: rgba(255, 255, 255, 0.20);
    height: 65px;
    width: 250px;
    text-align: center;
    border-radius: 8px;
    font-size: 32px;
    color:#fff;
    font-weight: 700;
    letter-spacing: .05em;

    &:focus {
        outline: none;
        border: 1px solid #ff0548;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50px;
`
export const Text = styled.span`
    /* font-family: monospace; */
    font-size: ${props => props.fontSize || '24px'};
    text-align: center;
    color: ${props => props.color || '#000'};
    font-weight: ${props => props.fontWeight || 'normal'};
`