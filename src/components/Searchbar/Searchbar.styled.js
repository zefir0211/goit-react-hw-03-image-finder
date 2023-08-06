import styled from '@emotion/styled';
import background from "../../images/search-backgraund.jpg";

export const Header = styled.header`
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
    ),
    url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    padding: 10px 0;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    width: 400px;
    height: 25px;
    display: flex;
    padding: 5px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    margin: 0 10px;
    text-align: center;
`;

export const Button = styled.button`
    text-align: center;
    cursor: pointer;
    background-color: #e6e6e6;
    border: 1px solid #02be6e;
    border-radius: 5px;
    padding: 10px 22px;
    display: flex;
    align-items: center;
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        &:hover,
        &:focus{
            background-color: #02be6e;
            color: #ffffff;
        }
`;

export const Text = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: Open Sans,Arial,sans-serif;
    color: #ffffff;
    text-shadow: 0 0 1px rgb(0 0 0 / 60%);
    line-height: 1.5;
    text-align: center;    
`;

export const ButtonLabel = styled.span`
    font-size: 22px;
    font-weight: 700;
`;