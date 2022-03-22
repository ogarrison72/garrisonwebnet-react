import React from "react";
import styled from "styled-components";
import SectionNavItem from "../../components/resumé-page/SectionNavItem";

const Container = styled.nav`
    /* Mobile styles */
    filter: drop-shadow(3px 3px 10px var(--light-shadow-color));
    transform: translateX(200%);
    animation: section-navbar-load var(--section-navbar-transition-time) ease-in var(--section-navbar-delay);
    animation-fill-mode: forwards;
    visibility: hidden;

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        visibility: visible;
        position: fixed;
        top: 6rem;
        right: 1rem;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
        top: 7rem;
        right: 2rem;
    }
`;

const SectionNavigation = () => (
    <Container class="list-group">
        <SectionNavItem name="Profile" href="/resume/#profile-section" />
        <SectionNavItem name="Skills" href="/resume/#skills-section" />
        <SectionNavItem name="Experience" href="/resume/#experience-section" />
        <SectionNavItem name="Contact" href="/resume/#contact-section" />
        <SectionNavItem name="Download Resumé" href="download/Odell_Garrison_Resumé.pdf" />
    </Container>
);

export default SectionNavigation;