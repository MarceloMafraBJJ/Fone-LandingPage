import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fcf7da;
    position: fixed;
    bottom:0;
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    font-size: 8px;
    > h1 {
        margin: 0;
        padding: 30px;
    }
    > h1+h1 {
        margin-left: 30px;
    }
`;
