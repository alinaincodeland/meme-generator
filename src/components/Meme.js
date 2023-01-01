import React, { useState } from "react";
import "../styles.css";
import { memeData } from "../memeData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  function getImage() {
    const randomIndex = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );
    const url = allMemeImages.data.memes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
        ></input>
        <input
          type="text"
          className="form-input"
          placeholder="Bottom text"
        ></input>

        <button className="form-button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="meme" className="meme-img" />
    </main>
  );
};

export default Meme;
