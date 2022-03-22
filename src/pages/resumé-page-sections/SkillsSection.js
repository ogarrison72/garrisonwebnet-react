import React from "react";
import styled from "styled-components";
import Section from "../../components/resumé-page/Section";
import SectionHeader from "../../components/resumé-page/SectionHeader";
import SkillsList from "../../components/resumé-page/SkillsList";


const programmingLanguages = [
    "C#",
    "C++",
    "C",
    "JavaScript",
    "VBScript",
    "HTML",
    "XML",
    "XAML",
    "T-SQL",
    "Swift",
    "TypeScript",
];
const technologies = [".NET", "WPF", "COM"];
const programmingMethodologies = ["Procedural", "OOP", "Flow-Driven", "Event-Driven"];
const projectManagement = ["Waterfall", "Agile", "Scrum"];
const databases = ["MS SQL", "SQLite"];
const tools = [
    "Visual Studio",
    "Azure DevOps",
    "ReSharper",
    "PostMan",
    "GIT",
    "SourceGear Vault",
    "PVCS Version Manager",
    "TFS",
    "InstallShield",
    "Xamarin",
    "Telerik UI for WPF",
    "LeadTools",
];

const Container = styled(Section)`
    /* Mobile styles */
    animation-delay: var(--abilities-section-delay);

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

const Content = styled.div`
    margin: 0 1rem;
`;



const SkillsSection = () => (
    <Container id="skills-section">
        <SectionHeader
            title="SKILLS"
            quote="The measure of intelligence is the ability to change."
            attributedTo="Albert Einstein"
        />
        <Content>
            <SkillsList listTitle="Languages" listItems={programmingLanguages} />
            <SkillsList listTitle="Technologies" listItems={technologies} />
            <SkillsList listTitle="Programming Methodologies" listItems={programmingMethodologies} />
            <SkillsList listTitle="Project Management" listItems={projectManagement} />
            <SkillsList listTitle="Databases" listItems={databases} />
            <SkillsList listTitle="Tools" listItems={tools} />
        </Content>
    </Container>
);

export default SkillsSection;