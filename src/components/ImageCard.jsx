import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(", ");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="an image" className="w-full h-56" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-400 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => {
          return (
            <span className="inline-block px-3 py-1 bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ImageCard;
