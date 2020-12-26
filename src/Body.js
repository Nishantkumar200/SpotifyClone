import React from "react";
import "./body.css";
import Header from "./Header";
import { useDataLayerValue } from "./datalayer";
import {
  Favorite,
  MoreHoriz,
  PlayCircleFilled,
} from "@material-ui/icons";
import SongRow from './SongRow';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt={discover_weekly} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="songs__icons">
          <PlayCircleFilled className="body_shuffle" fontSize="large" />
          <Favorite  className="favourite" />
          <MoreHoriz />
        </div>

        {/* List of songs */}

        {discover_weekly?.tracks.items.map((item) =>(
          <SongRow track = {item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
