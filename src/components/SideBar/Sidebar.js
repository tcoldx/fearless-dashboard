import React, { useState } from "react";
import Profile from "assets/images/profileImg.png";
import { BsChevronRight } from "react-icons/bs";

import {
  SidebarContainer,
  Message,
  SidebarItems,
  A,
  SidebarFooter,
  Img,
  NameWrap,
  EmailWrap,
  UpgradeButton,
  UsageWrap,
  ProgressBar,
  PlanWrap,
  Stats,
  StatRight,
  StatLeft,
  ImageWrap,
  Plan,
} from "./SideBar.styles";

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
      {props.amount && <Message>{props.amount}</Message>}
      {hovering && <BsChevronRight className="arrow" />}
    </A>
  );
};

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarItems>
        <NavContent name="Fearless.com" icon="language" bold={true} />
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
      {/*end of top sidebar*/}

      <SidebarFooter>
        <ImageWrap>
          <Img width="80" height="80" src={Profile} alt="img" />
        </ImageWrap>
        <NameWrap>Tredis Ingram</NameWrap>
        <EmailWrap>T.tredis@gmail.com</EmailWrap>
        <PlanWrap>Your Plan: Standard</PlanWrap>
        <UpgradeButton>Upgrade Your Plan</UpgradeButton>
        <Plan>Plan Uses</Plan>
        <UsageWrap>
          <ProgressBar />
        </UsageWrap>
        <Stats>
          <StatLeft>
            <span className="number">2,450</span>
            <span>Clicks Reviewed</span>
          </StatLeft>
          <StatRight>
            <span className="number">5000</span>
            <span>Monthly Clicks</span>
          </StatRight>
        </Stats>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default SideBar;
