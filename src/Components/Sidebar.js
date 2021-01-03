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

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://media-exp1.licdn.com/dms/image/C5603AQEgD7XwC4EQVw/profile-displayphoto-shrink_100_100/0/1602080742005?e=1614816000&v=beta&t=qcMgGX_a2UaWeB4kSTK86MuHhfFP70QE9mMg2VDCMuA'
        title='title'
      />
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
