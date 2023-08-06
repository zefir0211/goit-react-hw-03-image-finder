import styled from '@emotion/styled';

export const Button = styled.button`
    width: 196px;
    padding: 10px 22px;
    margin: 50px auto;
    text-align: center;
    cursor: pointer;
    background-color: #e6e6e6;
    color: rgba(0,0,0,.8);
    text-align: center;
    border: 1px solid #02be6e;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus{
        background-color: #02be6e;
        color: #ffffff;
    }
`;