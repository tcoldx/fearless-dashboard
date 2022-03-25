import React, { useState, useEffect } from "react";
import Profile from "assets/images/profileImg.png";
import { BsChevronRight } from "react-icons/bs";

import { SidebarContainer, Message, SidebarItems, A } from "./SideBar.styles";

const NavContent = (props) => {
  const [hovering, setHovering] = useState(false);

  const handleHover = (e) => {
    const { innerText } = e.target;
    if (innerText) {
      setHovering(true);
    }
  };

  const handleLeave = () => {
    setHovering(false);
  };

  return (
    <A href="#" onMouseLeave={handleLeave} onMouseEnter={handleHover}>
      <span class="material-icons">{props.icon}</span>
      <h3 className={props.bold ? "bold" : "nonbold"}>{props.name}</h3>
      <Message>{props.amount}</Message>
      {hovering && <BsChevronRight className="arrow" />}
    </A>
  );
};

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarItems>
        <NavContent name="Mysite.com" icon="language" bold={true} />
        <NavContent name="Analytics" icon="assessment" bold={true} />
        <NavContent name="Dashboard" />
        <NavContent name="Stats" />
        <NavContent name="Advertising" />
        <NavContent name="Setups" icon="settings" bold={true} />
        <NavContent name="Communications" />
        <NavContent name="Integrations" />
        <NavContent name="Add Domain" />
        <NavContent
          name="Notifications"
          icon="notifications"
          amount="12"
          bold={true}
        />
        <NavContent name="Logout" icon="power_settings_new" bold={true} />
      </SidebarItems>
    </SidebarContainer>
  );
};

export default SideBar;
