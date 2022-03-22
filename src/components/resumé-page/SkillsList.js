import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    /* Mobile styles */
    font-size: 1.75rem;
    margin: 2rem 0 0.5rem 0;
    color: var(--accent-font-color);
    text-transform: uppercase;

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

const List = styled.div`
    /* Mobile styles */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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

const Item = styled.span`
    /* Mobile styles */
    color: var(--dark-font-color);
    background-color: var(--light-background-color);
    border: 1px solid var(--light-background-color);
    border-radius: 25px;
    transition: color 0.5s, background-color 0.5s, border 0.5s;
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0.75rem;

    :hover {
        color: var(--dark-background-color);
        background-color: var(--light-font-color);
        border-color: var(--light-font-color);
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


const SkillsList = ({ listTitle, listItems }) => (
    <>
        <Title>{listTitle}</Title>
        <List>
            {listItems.map((skill, index) => (
                <Item key={index}>{skill}</Item>
            ))}
        </List>
    </>
);

export default SkillsList;