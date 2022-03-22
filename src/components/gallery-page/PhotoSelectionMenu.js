import React from "react";
import styled from "styled-components";

const List = styled.ul`
    /* Mobile styles */
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1rem;
    margin: 1.5rem 0;

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

const ListItem = styled.li`
    /* Mobile styles */
    font-family: "Dosis", sans-serif;
    text-transform: uppercase;

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

const PhotoSelectionMenu = () => (
    <>
        <List>
            <ListItem>All</ListItem>
            <ListItem>Fauna</ListItem>
            <ListItem>Flora</ListItem>
            <ListItem>Places</ListItem>
            <ListItem>Portrait</ListItem>
            <ListItem>Still</ListItem>
        </List>
        <hr />
    </>
);

export default PhotoSelectionMenu;