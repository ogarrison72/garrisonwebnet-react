import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    /* Mobile styles */
    font-size: 1rem;
    font-weight: thin;
    text-align: center;
    width: 100%;

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const StatusMessage = ({message}) => (
    <Paragraph>{message}</Paragraph>
);

export default StatusMessage;