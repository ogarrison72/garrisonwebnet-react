import React from "react";
import styled from "styled-components";

const Block = styled.p`
    /* Mobile styles */
    font-family: "Bilbo", cursive;
    letter-spacing: 0.1rem;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }
    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
        width: 70%;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const QuotedText = styled.span`
    /* Mobile styles */
    font-weight: 600;
    font-size: 1.4rem;

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }
    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
}`;

const AttributedTo = styled.span`
    /* Mobile styles */
    color: var(--ultradark-font-color);
    font-weight: 900;
    font-size: 1rem;

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }
    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
}`;


const Quote = ({ quote, attributedTo }) => (
    <Block>
        <QuotedText>&quot;{quote}&quot;</QuotedText>
        <AttributedTo> ― {attributedTo}</AttributedTo>
    </Block>
);

export default Quote;