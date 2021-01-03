import React from "react";
import "../Stylesheets/Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";

import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { useStateValue } from "./../StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information' />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow title='Friends' Icon={PeopleIcon} />
      <SidebarRow title='Messenger' Icon={ChatIcon} />
      <SidebarRow title='Marketplace' Icon={StorefrontIcon} />
      <SidebarRow title='Videos' Icon={VideoLibraryIcon} />
      <SidebarRow title='More' Icon={ExpandMoreIcon} />
    </div>
  );
};

export default Sidebar;
