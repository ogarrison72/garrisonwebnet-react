import React from "react";
import styled from "styled-components";
import Section from "../../components/resumé-page/Section";
import SectionHeader from "../../components/resumé-page/SectionHeader";
import TermInformation from "../../components/resumé-page/TermInformation";
import LocationInformation from "../../components/resumé-page/LocationInformation";

const Container = styled(Section)`
    /* Mobile styles */
    animation-delay: var(--experience-section-delay);

    ul li {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-direction: column;
        font-size: 0.9rem;
    }

    ul li .column {
        flex: 1;
        margin: 0 0.45rem;
    }

    ul li .column:nth-of-type(2) {
        flex: 2.5;
    }

    .bulleted {
        padding: 0.25rem 0 0.5rem 2rem;
        list-style-position: outside;
        list-style-type: disc;
    }

    .bulleted li {
        display: list-item;
    }

    .content p {
        margin: 0.5rem 0;
    }

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
        ul li {
            flex-direction: row;
        }
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const Content = styled.div`
    /* Mobile styles */
    margin: 0 1rem;

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

const ExperienceHeader = styled.div`
    /* Mobile styles */
    color: var(--accent-font-color);
    text-transform: uppercase;
    font-size: 1.75rem;
    margin: 3rem 0 0.5rem 0;

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

const ExperienceSubHeader = styled.h5`
    /* Mobile styles */
    color: var(--light-font-color);
    font-weight: 700;
    font-weight: 700;
    color: var(--light-font-color);

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

const ExperienceStart = styled.li`
    /* Mobile styles */
    margin: 2rem 0 0 0;

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



const ExperienceSection = () => (
    <Container id="experience-section">
        <SectionHeader
            title="Experience"
            quote="Experience is merely the name men gave to their mistakes."
            attributedTo="Oscar Wilde (The Picture of Dorian Gray)"
        />
        <Content>
            <ExperienceHeader>Careers</ExperienceHeader>
            <ul>
                <ExperienceStart>
                    <div class="column">
                        <TermInformation institution="ScanSource" beginTerm="Jun 2021" endTerm="Present" />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Developer</ExperienceSubHeader>
                        <ul class="bulleted">
                            <li>
                                Part of a team tasked with creating / implementing a synchronization web service which
                                would synchronize data changes between 2 or more subscriber processes.
                            </li>
                            <li>
                                Assigned the task of creating unit tests for the entire code base of the
                                synchoronization web service once I was brought onto the team. Ultimately, I was able to
                                achieve a 94% code coverage of the code base using MSTest unit tests and from that point
                                forward unit tests were created as new development was performed by each team member.
                            </li>
                            <li>
                                Manually setup the necessary resources in Azure needed to support the synchronization
                                service and its components.
                                <ul class="bulleted">
                                    <li>
                                        Some of the components included but were not limited to storage accounts, app
                                        service plans, app services, function apps, service bus queue, SQL DBaaS, key
                                        vault, application insights, API management, etc.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Created an Infrastructure as Code project for the synchronization service's Azure
                                infrastructure using Terraform.
                            </li>
                        </ul>
                        <LocationInformation
                            geoLocation="Greenville, South Carolina"
                            webAddress="https://www.scansource.com/"
                        />
                    </div>
                </ExperienceStart>

                <ExperienceStart>
                    <div class="column">
                        <TermInformation
                            institution="RedSail Technologies, LLC."
                            aka="QS/1 Data Systems"
                            beginTerm="Feb 2007"
                            endTerm="Aug 2020"
                        />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Systems Development Engineer</ExperienceSubHeader>
                        <ul class="bulleted">
                            <li>
                                Worked directly with Product Managers / Product Analysts and other project stakeholders
                                to identify and solidify requested features, build requirements, etc.
                            </li>
                            <li>Team lead; assigned, coordinated, and reviewed work of programming team.</li>
                            <li>Mentored and advised early career programmers and support technicians.</li>
                            <li>
                                Designed, implemented, and maintained a thin replacement for the MFC based client
                                application using the Microsoft .NET framework which improved support capabilities by
                                removing the need for a pool of GUI clients to facilitate communications between web
                                services and proprietary application / data server.
                            </li>
                            <li>
                                Designed, implemented, and maintained a C++ based Windows service which was responsible
                                for running workstation related updates which were pushed to the workstations from the
                                application server. This service facilitated the installation of workstation
                                dependencies without the need for the workstation administrator to be present.
                            </li>
                            <li>
                                Designed, implemented, and maintained consumer facing iOS and Android applications
                                written in C# .NET using Xamarin.iOS and Xamarin.Android.
                            </li>
                            <li>
                                Enhanced and maintained an internal website which provided information regarding
                                customers’ server and workstation hardware setup and system performance. This site was
                                utilized by the support, development, and marketing staff. It was originally created
                                using classic ASP and required the creation and maintenance of a MS SQL server DB which
                                provided the information it drew from.
                            </li>
                            <li>
                                Provided support to upper level support technicians and conducted troubleshooting for
                                legacy systems to ensure ongoing operations and performance for strategic accounts.
                            </li>
                            <li>
                                Improved customer service response time and increased productivity by designing,
                                implementing, and maintaining internal .NET utilities which aided Customer Support in
                                identifying and resolving issues reported by customers. These utilities were WPF
                                applications written and designed using XAML.
                            </li>
                            <li>
                                Defined, implemented, and maintained an internally used Windows service written in C#
                                and the .NET framework which scanned error logs as they were automatically uploaded to
                                internal servers after a customer system crash. An email notification would then be sent
                                to a select group of support technicians so that they could proactively contact the
                                customer and perform key file builds which would prevent future crashes.
                            </li>
                        </ul>
                    </div>
                </ExperienceStart>
                <li>
                    <div class="column">
                        <TermInformation beginTerm="Jan 1997" endTerm="Feb 2007" />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Systems Programmer</ExperienceSubHeader>
                        <ul class="bulleted">
                            <li>
                                Updated and maintained the Microsoft Foundation Class (MFC) based client application
                                used by all healthcare and governmental products. This client application was utilized
                                on over 71,000 workstations across over 4,200 customer sites.
                            </li>
                            <li>
                                Developed, tested, and maintained various Retail Pharmacy, Long Term Care Pharmacy, POS,
                                HME, and Governmental software solutions.
                            </li>
                            <li>
                                Designed, built, and supported installation packages and deployed to customer’s servers
                                and workstations.
                            </li>
                            <li>
                                Converted all the 16bit file sizing / conversion utilities to 32bit programs and also
                                made the necessary modifications to those programs so that the system updates would run
                                from CD media as opposed to 3.5” diskettes.
                            </li>
                            <li>
                                Designed and developed custom data conversion programs to migrate customer data from
                                their previous software to our products. Performed the data conversions and was
                                responsible for checking the conversion results for accuracy.
                            </li>
                        </ul>
                        <LocationInformation
                            geoLocation="Spartanburg, South Carolina"
                            webAddress="https://www.redsailtechnologies.com/"
                        />
                    </div>
                </li>

                <ExperienceStart>
                    <div class="column">
                        <TermInformation
                            institution="ACS Technologies"
                            aka="Computer Dimensions, Inc."
                            beginTerm="Jan 1996"
                            endTerm="Dec 1996"
                        />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Application Programmer</ExperienceSubHeader>
                        <ul class="bulleted">
                            <li>
                                Enhanced and maintained existing application programs written in the PCBUS language.
                            </li>
                            <li>Created and maintained custom reporting programs.</li>
                        </ul>
                    </div>
                </ExperienceStart>
                <li>
                    <div class="column">
                        <TermInformation beginTerm="Sep 1994" endTerm="Jan 1996" />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Software Support Specialist</ExperienceSubHeader>
                        <ul class="bulleted">
                            <li>
                                Provided technical support to customers who encountered problems or had questions
                                regarding the financial software packages.
                            </li>
                        </ul>
                        <LocationInformation
                            geoLocation="Florence, South Carolina"
                            webAddress="https://www.acstechnologies.com/"
                        />
                    </div>
                </li>
            </ul>
        </Content>

        <Content>
            <ExperienceHeader>Education</ExperienceHeader>
            <ul>
                <ExperienceStart>
                    <div class="column">
                        <TermInformation
                            institution="Francis Marion University"
                            beginTerm="Sep 1990"
                            endTerm="May 1994"
                        />
                    </div>
                    <div class="column">
                        <ExperienceSubHeader>Bachelor of Science - Computer Science & Math</ExperienceSubHeader>
                        <p>
                            The primary development language used throughout many of the computer science related
                            courses was Turbo Pascal. Following my graduation I spent a few years learning and working
                            with Delphi for a few personal projects.
                        </p>
                        <LocationInformation
                            geoLocation="Florence, South Carolina"
                            webAddress="https://www.fmarion.edu/"
                        />
                    </div>
                </ExperienceStart>
            </ul>
        </Content>
    </Container>
);

export default ExperienceSection;