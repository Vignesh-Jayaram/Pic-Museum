import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [term, setTerm] = useState(" ");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="">
      <header className="ml-12 mt-3 mb-2 ">
        <h1 className="text-4xl italic font-extrabold text-start text-gray-500 capitalize mt-2">
          Welcome to Pic Museum
        </h1>
      </header>

      <div className="mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid justify-items-stretch grid-cols-1 md:grid-cols-3 gap-4 ml-12">
            {images.map((image) => {
              return <ImageCard key={image.id} image={image} />;
            })}
          </div>
        )}
      </div>

      <footer className="py-2 bg-slate-600 bg-cover">
        <h5 className="text-white text-center md:text-right md:mr-2 ">
          Presented by
          <span className="italic font-semibold ml-1">
            <a href="https://github.com/Vignesh-Jayaram"> @VigneshJayaraman</a>
          </span>
        </h5>
      </footer>
    </div>
  );
}

export default App;
