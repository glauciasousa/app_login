import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    background: white;
    box-shadow: 0 1px 2px #0003;
    border-radius: 4px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    Link{
       text-decoration: none;
       color: black;
       font-size: 20px;
    }
`;