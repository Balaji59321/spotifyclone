import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { useDataLayerValue } from "./DataLayer";
function SideBar() {
  const [{ playLists }, dispatch] = useDataLayerValue();
  // console.log(playLists["href"]);

  const list = async () => {
    let ans = await fetch(playLists["href"]);
    // ans = ans.json();
    console.log(ans);
    // return ans;
  };
  return (
    <div className="sidebar">
      {() => list()}
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playLists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      {/* <SidebarOption title="Hip Hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" /> */}
    </div>
  );
}

export default SideBar;
