import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Section from "../../components/resumé-page/Section";
import Quote from "../../components/resumé-page/Quote";

const Container = styled(Section)`
    /* Mobile styles */
    animation-delay: var(--profile-section-delay);

    .row {
        margin-top: 5rem;
    }

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        .column {
            flex: 2;
            margin: 10px;
        }

        .row {
            display: flex;
            flex-direction: row;
        }
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const Name = styled.h3`
    /* Mobile styles */
    color: var(--light-font-color);
    align-items: center;
    font-size: 2rem;
    padding: 0.5rem 0;
    letter-spacing: 1px;
    text-align: center;

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        text-align: left;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const Role = styled.h4`
    /* Mobile styles */
    color: var(--mid-font-color);
    font-size: 1.15rem;
    padding: 0.5em 0;
    text-align: center;

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        text-align: left;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const PhotoFrame = styled.div`
    /* Mobile styles */
    display: flex;
    justify-items: center;
    align-items: center;

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

const ProfilePhoto = styled.img`
    /* Mobile styles */
    object-fit: cover;
    border-radius: 50%;
    border: 10px solid var(--light-background-color);
    filter: drop-shadow(0 0 5px var(--light-shadow-color));
    width: 200px;
    height: 200px;

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

const ContactLinks = styled.p`
    /* Mobile styles */
    margin-top: 1rem;

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

const ContactLink = styled.a`
    /* Mobile styles */
    font-size: 0.6rem;
    margin: 0 10px 0px 10px;
    color: var(--mid-font-color);
    text-decoration: none;
    transition: color 0.5s;

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
    width: 20px;
    height: 20px;

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
    width: 20px;
    height: 20px;

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

const ProfileSection = () => (
    <Container id="profile-section">
        <div class="row mx-1">
            <PhotoFrame className="m-auto col-xs-4 col-xl-3">
                <ProfilePhoto
                    src="./assets/images/profilepic.png"
                    alt="Odell Garrison Profile Pic"
                    className="img-fluid m-auto"
                />
            </PhotoFrame>
            <div class="col-xs-8 col-xl-9">
                <Role>Software Developer & Engineer</Role>
                <Name>Odell Garrison</Name>
                <p>
                    Detail-oriented application developer with 20+ years success designing innovative and tailored
                    solutions to meet ever changing business requirements within diverse industries. Determined and
                    dedicated individual with strong work ethic. Logical and creative problem-solver with a keen ability
                    to translate complex problems into simple terms and requirements. Team player with a positive and
                    can-do attitude.
                </p>
                <ContactLinks>
                    <ContactLink href="mailto:odell@garrisonweb.net">
                        <EmailIcon />
                    </ContactLink>
                    <ContactLink href="http://www.linkedin.com/in/odell-garrison" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </ContactLink>
                </ContactLinks>
            </div>
        </div>
        <br />
        <br />
        <Quote
            quote="Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
            attributedTo="Bernard M. Baruch"
        />
    </Container>
);

export default ProfileSection;
