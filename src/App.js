import React from "react";
import GalleryWrapper from "./components/gallery-wrapper/gallery-wrapper.component";
import { imagesSrc } from "./utils/imagesDb";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <GalleryWrapper imagesSrc={imagesSrc} />
    </div>
  );
}

export default App;
