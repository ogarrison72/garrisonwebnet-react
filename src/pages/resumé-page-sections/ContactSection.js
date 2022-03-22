import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Section from "../../components/resumé-page/Section";
import SectionHeader from "../../components/resumé-page/SectionHeader";

const SectionContainer = styled(Section)`
    /* Mobile styles */
    animation-delay: var(--contact-section-delay);

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

const List = styled.ul`
    /* Mobile styles */
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 0.9em;
    margin: 1.5rem 0;

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        flex-direction: row;
        font-size: 0.9em;
        margin: 1.5rem 0;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const ListItem = styled.li`
    /* Mobile styles */

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

const Link = styled.a`
    /* Mobile styles */
    text-decoration: none;
    color: var(--mid-font-color);
    vertical-align: top;

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

const EmailIcon = styled(MdEmail)`
    /* Mobile styles */
    width: 24px;
    height: 24px;
    margin: 5px;

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

const LinkedInIcon = styled(FaLinkedin)`
    /* Mobile styles */
    width: 24px;
    height: 24px;
    margin: 5px;

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


const ContactSection = () => (
    <SectionContainer id="contact-section">
        <SectionHeader
            title="Contact"
            quote="The surest sign that intelligent life exists elsewhere in the
                universe is that it has never tried to contact us."
            attributedTo="Bill Watterson"
        />
        <List>
            <ListItem>
                <Link href="mailto:odell@garrisonweb.net">
                    <span>
                        <EmailIcon />
                        odell@garrisonweb.net
                    </span>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="http://www.linkedin.com/in/odell-garrison" target="_blank" rel="noreferrer">
                    <span>
                        <LinkedInIcon />
                        http://www.linkedin.com/in/odell-garrison
                    </span>
                </Link>
            </ListItem>
        </List>
    </SectionContainer>
);

export default ContactSection;