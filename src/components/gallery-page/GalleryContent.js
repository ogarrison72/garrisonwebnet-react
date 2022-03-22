import React from "react";
import Masonry from "../Masonry";

const GalleryContent = ({ photos, contentDescription}) => {
    var columns = 1;
    var gap = 24;

    if (window.innerWidth >= 620) {
        columns = 2;
    }

    if (window.innerWidth >= 960) {
        columns = 4;
    }

    if (window.innerWidth >= 1200) {
        columns = 5;
    }

    return <Masonry photos={photos} columns={columns} gap={gap} contentDescription={contentDescription}/>;
};

export default GalleryContent;
