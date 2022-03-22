import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex-block;
    justify-content: center;
    margin: 50px;
`;

const PhotoFrame = styled.img`
    border: 5px solid white;
    border-bottom: 2rem solid white;
    border-radius: 5px;
    display: block;
    object-fit: contain;
`;

const Title = styled.p`
    color: black;
    position: relative;
    top: -1.75rem;
    font-size: .75rem;
    display: block;
`;

const Image = ({ path, title, maxHeight }) => {
    return (
        <Container>
            <PhotoFrame src={path} alt={title}></PhotoFrame>
            <Title>{title}</Title>
        </Container>
    );
};

export default Image;
