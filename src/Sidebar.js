import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./datalayer";
const Sidebar = () => {
  const [{ playlist }, dispatch] = useDataLayerValue();
  console.log(playlist);
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className="sidebar__logo"
        alt=""
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlist.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  );
};

export default Sidebar;
