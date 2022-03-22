import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingAnimation from "./LoadingAnimation";
import StatusMessage from "./StatusMessage";

const CollectionContainer = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    columns: ${(props) => props.columns};
    column-gap: 0px;
`;

const ImageContainer = styled.div`
    display: inline-block;
    border-radius: 5px;
    background-color: var(--light-font-color);
    filter: drop-shadow(5px 5px 5px var(--dark-shadow-color));
    padding: 5px;
    margin: ${(props) => props.margin}px;

    @keyframes image-load {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    animation: image-load 0.25s ease-in-out;
    animation-fill-mode: forwards;
    transform: scale(0);
`;

const ImageStyle = styled.img`
    width: 100%;
    border-radius: 5px;
    clip-path: inset(5px 5px);
`;

const Caption = styled.span`
    color: var(--dark-background-color);
    margin: 0px 5px;
    font-size: 0.85rem;
    font-family: "Dosis", sans-serif;
`;

const Masonry = ({ photos, columns, gap, contentDescription }) => {
    const [areAllPhotosLoaded, setAreAllPhotosLoaded] = useState(false);

      useEffect(() => {
          const loadPhoto = (photo) => {
              return new Promise((resolve, reject) => {
                  const loadImg = new Image();
                  loadImg.src = photo.path;

                  loadImg.onload = () =>
                      setTimeout(() => {
                          resolve(photo.path);
                      }, 2000);

                  loadImg.onerror = (err) => reject(err);
              });
          };

          Promise.all(photos.map((photo) => loadPhoto(photo)))
              .then(() => setAreAllPhotosLoaded(true))
              .catch((err) => console.log("Failed to load photos.", err));
      }, []);
    
    return (
        <>
            {areAllPhotosLoaded ? (
                <CollectionContainer columns={columns}>
                    {photos.map((photo, i) => (
                        <ImageContainer key={i} margin={gap / 2}>
                            <ImageStyle src={photo.path} alt={photo.title}></ImageStyle>
                            <Caption>{photo.title}</Caption>
                        </ImageContainer>
                    ))}
                </CollectionContainer>
            ) : (
                    <>
                        <LoadingAnimation />
                        <StatusMessage message={`Loading ${contentDescription} ...`} />
                    </>
            )}
        </>
    );
};

export default Masonry;
