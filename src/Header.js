import React from "react";
import "./Header.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlined />
        <input type="text" placeholder="Search for artists,songs" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
