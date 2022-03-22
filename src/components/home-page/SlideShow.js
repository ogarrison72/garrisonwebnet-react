import React from "react";
import styled from "styled-components";


const Container = styled.div`
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

const Carousel = styled.div`
    /* Mobile styles */
    .carousel-indicators [data-bs-target] {
        width: 7px;
        height: 7px;
        padding: 0;
        border-radius: 50%;
        border: 1px solid transparent;
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

const Photo = styled.img`
    /* Mobile styles */
    object-fit: contain;
    border-radius: 10px;
    border: 5px solid var(--dark-font-color);

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

const Button = styled.button`
    /* Mobile styles */
    .carousel-control-prev-icon, .carousel-control-next-icon {
        color: #b5b5b523;
        background-color: #b5b5b523;
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

const SlideShow = () => (
    <Container id="carouselControls" className="col-md-4 p-5 p-md-0 carousel slide carousel-fade" data-bs-ride="carousel">
        <Carousel>
            <div class="carousel-item active">
                <Photo className="d-block w-100" src="./assets/images/slides/portrait.jpg" alt="Portrait" />
            </div>
            <div class="carousel-item">
                <Photo className="d-block w-100" src="./assets/images/slides/code.jpg" alt="Code" />
            </div>
            <div class="carousel-item">
                <Photo className="d-block w-100" src="./assets/images/slides/batman.jpg" alt="Batman Digital Art" />
            </div>
            <div class="carousel-item">
                <Photo
                    className="d-block w-100"
                    src="./assets/images/slides/wonder-woman.jpg"
                    alt="Wonder Woman Digital Art"
                />
            </div>
            <div class="carousel-item">
                <Photo
                    className="d-block w-100"
                    src="./assets/images/slides/hunt-for-red-october.jpg"
                    alt="Hunt For Red October Digital Art"
                />
            </div>
            <div class="carousel-item">
                <Photo className="d-block w-100" src="./assets/images/slides/lone-rose.jpg" alt="Rose" />
            </div>
            <div class="carousel-item">
                <Photo className="d-block w-100" src="./assets/images/slides/flamingo.jpg" alt="Flamingo" />
            </div>
            <div class="carousel-item">
                <Photo className="d-block w-100" src="./assets/images/slides/iris.jpg" alt="Iris" />
            </div>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="5"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="6"></button>
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="7"></button>
            </div>
        </Carousel>
        <Button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </Button>
        <Button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </Button>
    </Container>
);


export default SlideShow;