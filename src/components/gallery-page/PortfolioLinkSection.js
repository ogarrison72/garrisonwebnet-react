import React from "react";
import styled from "styled-components";

const Container = styled.div`
    /* Mobile styles */
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

const PortfolioLink = styled.a`
    /* Mobile styles */
    text-decoration: none;
    font-size: 1.1rem;
    color: var(--mid-font-color);

    :hover {
        color: var(--light-font-color);
    }

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

const PortfolioLinkSection = ({ siteName, siteUrl }) => (
    <Container>
        View my portfolio at <i><PortfolioLink href={siteUrl} target="_blank" rel="noreferrer">{siteName}</PortfolioLink></i>.
        <hr />
    </Container>
);

export default PortfolioLinkSection;
