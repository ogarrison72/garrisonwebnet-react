import React from "react";
import styled from "styled-components";
import Quote from "./Quote";

const Header = styled.h2`
    /* Mobile styles */
    text-align: center;
    text-transform: uppercase;
    color: var(--light-font-color);
    background-color: var(--light-background-color);
    border-radius: 5px;
    filter: drop-shadow(3px 3px 10px var(--light-shadow-color));
    font-size: 2.25rem;
    letter-spacing: 1px;
    padding: 1rem;
    margin: 1rem 0;

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

const Text = styled.span`
    /* Mobile styles */
    filter: drop-shadow(1px 1px 5px var(--dark-shadow-color));

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

const DividingLine = styled.hr`
    margin: 1rem auto;
    width: 95%;
    border: 1px solid var(--ultralight-background-color);
    filter: drop-shadow(3px 3px 5px var(--light-shadow-color));
`;

const SectionHeader = ({ title, quote, attributedTo }) => (
    <>
        <br />
        <Header>
            <Text>{title}</Text>
        </Header>
        <Quote quote={quote} attributedTo={attributedTo} />
        <DividingLine />
    </>
);

export default SectionHeader;