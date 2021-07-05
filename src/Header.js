import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {

  const mockUser = {
    display_name: "Teemu / Admin",
    images: [{ url: "https://avatars.githubusercontent.com/u/15348014?v=4" }],
  };

  return (
    <div className="header">
      {/* <div className="header__left">
        <SearchIcon />
        <input placeholder="search for Artists, Songs or Albums" type="text" />
      </div> */}
      <div className="header__right">
        {/* <Avatar src={mockUser?.images[0]?.url} alt={mockUser?.display_name} />
        <h4>{mockUser?.display_name}</h4> */}
      </div>
    </div>
  );
}

export default Header;
