import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 5rem;
    text-align: center;
    font-size: 1.5rem;
`;

const NotFoundPage = () => (
    <Container>
        <h1>404: Page Not Found</h1>
    </Container>
);

export default NotFoundPage;
