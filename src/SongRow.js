/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/href-no-hash */
import React from "react";
import "./SongRow.css";

function SongRow( {podcast} ) {

  return (
   <div className="container">
  <div className="podcast">
    <h3 className="podcast__episode_title">{podcast.name}</h3>
    <h4 style={{fontWeight:'700', fontSize: '.85rem'}} className="podcast__title">
    {podcast.artists.map((artist) => artist).join(", ")}
          {" - "}
          {podcast.upload_date}
    </h4>
    <h6 className="podcast__title">
    {podcast.description}
    </h6>
    <div className="podcast__meta">
      <audio controls width="100%">
        <source src={podcast.audio_url} />
        Your browser does not support the audio tag.
      </audio>
      <a href="#" className="artwork">
        <img
          src={podcast.img}
          alt
        />
      </a>
    </div>
  </div>
</div>

  );
}

export default SongRow;
