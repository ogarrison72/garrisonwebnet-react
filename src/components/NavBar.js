import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
    /* Mobile styles */
    background-color: var(--light-background-color);
    filter: drop-shadow(0 2px 5px var(--dark-shadow-color));

    .navbar-brand {
        font-size: 2rem;
        text-decoration: none;
        color: var(--mid-font-color);
        margin: 0.25rem 0.25rem 0.25rem 1rem;
        transition: color 1s;
    }

    .navbar-brand:hover {
        color: var(--light-font-color);
    }

    .navbar-toggler-icon {
        color: var(--mid-font-color);
    }

    .nav-link {
        text-decoration: none;
        color: var(--mid-font-color);
        background-color: transparent;
        margin: 0 1rem;
        padding: 0 0.25rem;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: color 0.5s;
    }

    && .nav-link:hover {
        color: var(--light-background-color);
        background-color: var(--light-font-color);
        border-radius: 5px;
    }

    .active {
        border-radius: 5px;
        background-color: var(--accent-background-color);
    }

    .navbar-toggler {
        border: none;
    }

    .nav-item {
        font-size: 1rem;
        line-height: 2rem;
    }

    /* Small tablet styles */
    @media screen and (min-width: 620px) {
        .navbar-brand {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
        .nav-item {
            font-size: 0.8rem;
            line-height: 1.5rem;
        }
    }

    /* Large tablet and laptop styles*/
    @media screen and (min-width: 960px) {
    }

    @media screen and (min-width: 992px) {
        .nav-item {
            font-size: 1rem;
        }
    }

    /* Desktop styles */
    @media screen and (min-width: 1200px) {
    }
`;

const NavBar = () => (
    <Container id="main-nav" className="navbar navbar-dark navbar-expand-md fixed-top">
        <Link className="navbar-brand" to="/">
            Odell Garrison
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav-links">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="main-nav-links">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link className="nav-link text-md-center mr-xs" to="/">
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-md-center mr-xs" to="/resume">
                        Interactive Resumé
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-md-center mr-xs" to="/gallery/digitalartwork">
                        Digital Artwork
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-md-center mr-xs" to="/gallery/photography">
                        Photography
                    </Link>
                </li>
            </ul>
        </div>
    </Container>
);

export default NavBar;
