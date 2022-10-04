import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [userSearch, setUserSearch] = useState("dolphin")

 
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=8qSN1uEKeXDqtG7F6Wf6TrZcXHhLXpf9&rating=g`
    )
      .then((resp) => {
        return resp.json();
      })
      .then(({ data }) => {
        console.log(data.slice(0, 3));
        const newData = data.slice(0, 3).map((gif) => {
          return { url: gif.images.original.url };
        });
        setGifs(newData);
      });
  }, [userSearch]);

 
  const onSearchFormSubmit = (userInput) => {
    
    setUserSearch(userInput)
  };

  return (
    <div>
      <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
      <GifList theGifs={gifs} />
    </div>
  );
}
export default GifListContainer;

