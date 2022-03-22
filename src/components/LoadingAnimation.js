import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Animation = styled(ReactLoading)`
    margin: 25px;
`;

const LoadingAnimation = () => (
    <Container>
        <Animation type="spinningBubbles"/>
    </Container>
);

export default LoadingAnimation;