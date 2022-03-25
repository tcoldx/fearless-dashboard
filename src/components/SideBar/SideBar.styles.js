import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  height: 100vh;
  &.bold {
    font-weight: bold;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 96vh;
  position: relative;
  margin-top: 30px;

  & a {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
    height: 2.7rem;
    align-items: center;
  }

  & a span {
    color: lightblue;
  }

  & h3 {
    font-size: 14px;
  }

  & a:last-child {
    position: absolute;
    bottom: 1rem;
    width: 80%;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  border-radius: 10px;
  font-size: 13.5px;
  background: lightblue;
  width: 2rem;
`;

export const A = styled.a`
  display: flex;

  &:hover {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
    transition: all 600ms ease;
  }

  & .arrow {
    color: lightblue;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  }
  &:hover .hide {
    color: red;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 13px;
`;

export const StatsSelect = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  }
  & span {
    margin-left: 2rem;
  }
`;

export const Header = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  width: 75%;
  height: 3.7rem;
  &:hover {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  }
  & span {
    color: red;
    margin-left: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Signoff = styled.div`
  display: flex;
  &:hover {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  }
`;

export const NavBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

export const NameWrap = styled.div`
  font-size: 11px;
  font-weight: bold;
`;

export const EmailWrap = styled.div`
  color: gray;
  opacity: 0.8;
  font-size: 12px;
  margin-top: 5px;
`;

export const PlanWrap = styled.div`
  font-weight: bold;
  color: lightblue;
  font-size: 14px;
  margin-top: 5px;
`;

export const UpgradeButton = styled.button`
  border: none;
  color: white;
  background: lightblue;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;
