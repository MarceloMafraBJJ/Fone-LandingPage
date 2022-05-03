import styled from 'styled-components';
import FoneImg from '../../assets/fone.png'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const SectionFone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    margin-top: 100px;
`;

export const Fone = styled.div`
    background-image: url(${FoneImg});
    background-position: center;
    background-size: cover;
    width:300px;
    height: 340px;
`;
export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

`;
export const SubInformations = styled.div`
 display: flex;
 flex-direction: row;
 margin: 20px 0px;

`;
export const Title = styled.div`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 40px;
    color: #ca3b3a;
    text-transform: uppercase;
    margin-bottom: 30px;
`;
export const SubTitle = styled.div`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    color: #000;
`;
export const Stars = styled.div`
    > ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    > ul li+li {
        margin-left: 10px;
        cursor: pointer;
    }
    > ul li {
        color: #ca3b3a;
        
    }
`;
export const Evaluation = styled.div`
        font-weight: 600 ;
        color: #ca3b3a;
        margin-left: 20px;
`;
export const Button = styled.div`
    padding: 10px;
    background-color: #ca3b3a;
    color: #fff;
    margin-left: 60px;
    cursor: pointer;
    &:hover {
        background: #000;
    }
`;
export const Price = styled.div`
    font-weight: 700;
    font-size: 25px;
    font-family: 'Montserrat';
`;
export const Finish = styled.div`
    display: flex;
    align-items: center;
`;
export const Description = styled.div`
    color: #707070;
`;
export const SubInformationsDescription = styled.div`
    margin-bottom: 20px;

`;


