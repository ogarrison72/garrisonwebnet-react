import React from "react";
import styled from "styled-components";

const InstitutionName = styled.h4`
    /* Mobile styles */
    color: var(--light-font-color);
    font-size: 1rem;
    font-weight: 700;

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

const AlsoKnownAs = styled.span`
    /* Mobile styles */
    font-style: italic;
    font-size: 0.9em;

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


const TermInformation = ({ institution, aka, beginTerm, endTerm }) => (
    <>
        <InstitutionName>{institution}</InstitutionName>
        {aka && (
            <AlsoKnownAs>
                (Formerly {aka})<br />
            </AlsoKnownAs>
        )}
        <span>
            {beginTerm} ― {endTerm}
        </span>
    </>
); 

export default TermInformation;