import styled from '@emotion/styled';

export const PhotoCard = styled.li`
    margin: 10px 15px 0 10px;
    position: relative;
    list-style: none;
`;

export const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 2px;
    object-fit: cover;
    cursor: zoom-in;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        transform: scale(1.03);
    }
`;