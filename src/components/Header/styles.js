import styled from 'styled-components';
import Logo from '../../assets/logo.svg'

export const Container = styled.div`
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
`;

export const Image = styled.div`
    background-image: url(${Logo});
    background-position: center;
    background-size: cover;
    width:80px;
    height: 50px;
`;
export const Items = styled.ul`
    display: flex;
    font-size: 15px;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    
    > li {
        border-bottom: 1px solid #fff;
        border-bottom-width: 2px;
    }
  
    > li + li {
        margin-left: 30px;
    }
    > li:hover {
        cursor: pointer;
        border-bottom: 1px solid #ca3b3a;
        border-bottom-width: 2px;
    }
`;
export const Menu = styled.ul`
    display: flex;
    font-size: 20px;
    list-style: none;
    margin-right: 20px;
  
    > li + li {
        margin-left: 30px;   
    }
    > li {
        cursor: pointer;
    }
   
`;
