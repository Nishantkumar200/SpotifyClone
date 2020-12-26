import React from "react";
import "./footer.css";

// Center Icons
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";

// Right icons
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { PlaylistAdd } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
       <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_53618706.png?auto=format&q=60&fit=max&w=930" alt="album_Cover"  />
       <div className="song_Info">
         <h4>Yeah !</h4>
         <p>Usher</p>
       </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon"  />
        <PlayCircleFilledIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistAdd />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
