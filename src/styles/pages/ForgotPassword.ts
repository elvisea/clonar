
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

    h1 {
        color: #666666;
        font-size: 12px;
        text-align: center;
        line-height: 15.6px;
        margin-bottom: 16px;
    }

    input {
        width: 100%;
        height: 30px;
        padding: 0 16px;
        max-width: 290px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-bottom: 16px;
    }

    div {
        display: flex;
        flex-direction: row;

        button {
            color: #fff;
            width: 120px;
            height: 26px;
            border: none;
            margin-right: 4px;
            border-radius: 2px;
            background: #3f6bff;
            
            :last-child {
                margin-right: 0px;
            }
        }
    }
`;
