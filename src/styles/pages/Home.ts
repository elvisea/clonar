
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #E9E9E9;
`;

export const Content = styled.div`
    display: flex;
    height: 305px;
    width: 350px;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;

    input {
        max-width: 290px;
        width: 100%;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 0 16px;

        &:first-child {
            margin-bottom: 16px;
        }
    }

    button {
        margin-top: 16px;
        width: 120px;
        height: 26px;
        border: none;
        border-radius: 2px;
        color: #fff;
        background: #3f6bff;
    }

    a {
        margin-top: 16px;
        color: #3f6bff;
    }
`;

export const Title = styled.h1`
    color: red;
    font-size: 50px;
    color: #fff;
`;