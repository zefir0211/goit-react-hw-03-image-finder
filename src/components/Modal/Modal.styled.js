import styled from '@emotion/styled';

export const BackDrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalWindow = styled.div`
    width: 100%;
    height: 100%;
`;

export const Img = styled.img`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 95%;
    max-height: 95%;
`;