import React from "react";
import styled from "styled-components";
import ProfileSection from "./resumé-page-sections/ProfileSection";
import SkillsSection from "./resumé-page-sections/SkillsSection";
import ExperienceSection from "./resumé-page-sections/ExperienceSection";
import ContactSection from "./resumé-page-sections/ContactSection";
import SectionNavigation from "./resumé-page-sections/SectionNavigation";

import "./ResuméPage.css";

const Container = styled.div`
    /* Mobile styles */
    margin-bottom: 5rem;
    width: 95%;
    padding-bottom: 2rem;
    
    /* Small tablet styles */
    @media screen and (min-width: 620px) {
        width: 80%;
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const ResuméPage = () => (
    <>
        <Container className="mx-auto">
            <ProfileSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
        </Container>
        <SectionNavigation />
    </>
);

export default ResuméPage;
