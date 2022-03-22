import React from "react";
import styled from "styled-components";

const Container = styled.div`
    /* Mobile styles */
    .list-group-item {
        color: var(--mid-font-color);
        background-color: var(--light-background-color);
        transition: color 0.5s, background-color 0.5s;
    }

    .list-group-item:hover {
        color: var(--dark-background-color);
        background-color: var(--light-font-color);
    }

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
    }
`;

const SectionNavItem = ({ name, href }) => (
    <Container>
        <a href={href} class="list-group-item list-group-item-action">
            {name}
        </a>
    </Container>
);

export default SectionNavItem;
