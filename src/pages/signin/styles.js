import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 500px;
    padding: 10px;
    border-radius: 10px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #676767;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    color: #676767;
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;
    display: flex;
    align-items: center;

    * {
        text-decoration: none;
        color: black;
    }
`;