import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ResuméPage from "./pages/ResuméPage";

const App = () => (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResuméPage />} />
            <Route path="/gallery/:content" element={<GalleryPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
);

export default App;
