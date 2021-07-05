import React from "react";
import "./Footer.css";

function Footer({spotify}) {

    // useEffect(() => {
    //     spotify.getMyCurrentPlaybackState().then((r) => {
    //       console.log(r);
    
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: r.is_playing,
    //       });
    
    //       dispatch({
    //         type: "SET_ITEM",
    //         item: r.item,
    //       });
    //     });
    // }, [spotify]);
        
    // const handlePlayPause = () => {
    //     if (playing) {
    //       spotify.pause();
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: false,
    //       });
    //     } else {
    //       spotify.play();
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: true,
    //       });
    //     }
    // };
    
    // const skipNext = () => {
    //     spotify.skipToNext();
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
    // };
    
    // const skipPrevious = () => {
    //     spotify.skipToPrevious();
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
    // };
    

    return(
        <div></div>
    
    )}

export default Footer;