import React from "react";
import "../Stylesheets/SidebarRow.css";
import Avatar from "@material-ui/core/Avatar";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
