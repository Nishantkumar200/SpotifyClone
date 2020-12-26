import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

import {useDataLayerValue} from './datalayer';

const Header = ({ spotify }) => {
    const[{user},dispatch] =  useDataLayerValue();
  return (
    <React.Fragment>
      <div className="header">
        <div className="header__left">
          <SearchIcon className="search__icon"/>
          <input type="text" placeholder="Search for Artist, Songs, Album" />
        </div>
        <div className="header__right">
          <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
          <Typography variant="h6" className="typo">{user?.display_name}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
