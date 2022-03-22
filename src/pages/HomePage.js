import React from 'react';
import styled from 'styled-components';
import SlideShow from '../components/home-page/SlideShow';
import "./HomePage.css";

const ScreenBounds = styled.div`
    /* Mobile styles */
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

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
    /* Mobile styles */
    width: 85%;
    padding: 20px;
    animation: page-content-load var(--page-content-load-time) ease-in-out;
    animation-fill-mode: forwards;
    transform: scale(0);

    @media screen and (min-width: 375px) {
        width: 95%;
    }

    /* Small tablet styles */
    @media screen and (min-width: 768px) {
        width: 85%;
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const DescriptionContainer = styled.div`
    /* Mobile styles */
    font-weight: 200;
    line-height: 2rem;    
    font-size: 0.7rem;

    /* Small tablet styles */
    @media screen and (min-width: 450px){
        line-height: 3.5rem;        
        font-size: 1rem;
    }

    @media screen and (min-width: 620px) {
    }

    @media screen and (min-width: 768px){
        display: flex;
        flex: 2;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    @media screen and (min-width: 992px){
        line-height: 3.5rem;        
        font-size: 1.5rem;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
        line-height: 4.5rem;        
        font-size: 2rem;
    }

`;

const Paragraph = styled.p`
    /* Mobile styles */
    text-align: center;
    filter: drop-shadow(5px 5px 5px var(--dark-shadow-color));

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

const Italicized = styled(Paragraph)`
    /* Mobile styles */
    font-style: italic;
    font-size: 1.3rem;

    /* Small tablet styles */
    @media screen and (min-width: 450px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 620px) {
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    @media screen and (min-width: 992px) {
        font-size: 2.5rem;
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
        font-size: 3rem;
    }
`;

const HomePage = () => (
    <ScreenBounds>
        <Content>
            <div class="row">
                <SlideShow />
                <DescriptionContainer className="col-md-8">
                    <Italicized>Software Developer & Engineer</Italicized>
                    <Paragraph>and</Paragraph>
                    <Italicized>Amateur Artist & Photographer</Italicized>
                </DescriptionContainer>
            </div>
        </Content>
    </ScreenBounds>
);

export default HomePage;