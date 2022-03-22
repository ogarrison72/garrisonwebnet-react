import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StatusMessage from "../components/StatusMessage";
import GalleryContent from "../components/gallery-page/GalleryContent";
import PortfolioLinkSection from "../components/gallery-page/PortfolioLinkSection";
import PhotoSelectionMenu from "../components/gallery-page/PhotoSelectionMenu";

const Container = styled.div`
    margin-top: 5rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const PageContent = styled.div`
    width: 100%;
`;


const GalleryPage = () => {
    const { content } = useParams();

    const [photos, setPhotos] = useState(null);

    var isPhotography = false;
    var contentDescription = "";
    var searchTag = "";
    var portfolioSite = "";
    var portfolioUrl = "";

    if (content === "digitalartwork") {
//        isPhotography = false;
        searchTag = "digital-artwork";
        contentDescription = "digital artwork";
        portfolioSite = "Procreate Folio";
        portfolioUrl = "https://folio.procreate.art/odell";
    } else {
        if (content === "photography") {
//            isPhotography = true;
            searchTag = "photo";
            contentDescription = "photography";
            portfolioSite = "Fine Art America";
            portfolioUrl = "https://fineartamerica.com/profiles/odell-garrison";
        }
    }

    useEffect(() => {
        setPhotos(null);

        //Note: Ensure that we scroll up to the top of the page if a reload is being performed.
        window.scrollTo({ top: 0, behavior: "smooth" });

        const fetchData = async () => {
            let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key={api_key_goes_here}&user_id={user_id_goes_here}}%40N02&tags=${searchTag}&per_page=500&format=json&nojsoncallback=1`;

            const response = await fetch(url);
            const json = await response.json();

            // eslint-disable-next-line array-callback-return
            json.photos.photo.map((photo) => {
                photo.path = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            });

            console.log(json.photos);
            setPhotos(json.photos);
        };

        fetchData().catch(console.error);
    }, [searchTag]);

    return (
        <Container>
            {photos ? (
                <>
                    <PageContent>
                        <PortfolioLinkSection siteName={portfolioSite} siteUrl={portfolioUrl} />
                        {isPhotography && <PhotoSelectionMenu />}
                        <GalleryContent photos={photos.photo} contentDescription={contentDescription} />
                    </PageContent>
                </>
            ) : (
                <StatusMessage message={`Gathering ${contentDescription}... please wait.`} />
            )}
        </Container>
    );
};

export default GalleryPage;
