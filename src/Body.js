import React, { useEffect, useState } from "react";
import "./Body.css";
import Footer from "./Footer";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import { PlayCircleFilled } from "@mui/icons-material";
import { FavoriteOutlined } from "@mui/icons-material";
import { MoreHorizOutlined } from "@mui/icons-material";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);

  const playSong = (id) => {
    alert("This requires Premium Subscription !");
    // console.log("playing now", id);
    // spotify
    //   .play({
    //     uris: [`spotify:track:${id}`],
    //   })
    //   .then((res) => {
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
    //       dispatch({
    //         type: "SET_ITEM",
    //         item: r.item,
    //       });
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: true,
    //       });
    //     });
    //   });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={
            discover_weekly?.images[0].url
              ? discover_weekly?.images[0].url
              : "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
          }
          alt=""
        />
        <div className="body__infoText">
          <strong>MY PLAYLIST</strong>
          <h2>Disocver Weekly</h2>
          {/* <p>{discover_weekly?.description}</p> */}
          <p>
            Your weekly mixtape of fresh music.Enjoy new music and deep cuts
            picked for you.Updates every monday
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled
            className="body__shuffle"
            onClick={() => playSong}
          />
          <FavoriteOutlined fontSize="large" />
          <MoreHorizOutlined />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
