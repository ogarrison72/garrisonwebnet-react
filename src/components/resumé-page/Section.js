import styled from "styled-components";

const Section = styled.div`
    /* Mobile styles */
    padding-top: 2rem;
    margin: 5rem auto 0 auto;
    opacity: 0;
    animation-name: section-load;
    animation-duration: var(--section-transition-time);
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;

    :nth-of-type(1) {
        margin-top: 0rem;
    }

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
    }
    @media screen and (min-width: 768px) {
    }

    /* Large tablet and laptop styles */
    @media screen and (min-width: 960px) {
        width: 80%;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

export default Section;