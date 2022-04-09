import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  height: 100vh;
  background: #edf0f6;
  &.bold {
    font-weight: bold;
  }
`;

export const Stats = styled.div`
  display: flex;
  width: 80%;
  margin-top: 1.3rem;
  align-items: center;
  justify-content: center;
  font-size: 11px;
`;

export const StatLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;

  & .number {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const StatRight = styled.div`
  display: flex;
  flex-direction: column;

  & .number {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30px;
  height: 420px;

  & a {
    display: flex;
    height: 3.7rem;
    align-items: center;
    gap: 1rem;
    position: relative;
  }

  & a span {
    margin-left: 10px;
    color: lightblue;
  }

  & h3 {
    font-size: 14px;
  }

  & .nonbold {
    margin-left: 1.5rem;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background: #f2dbde;
  border-radius: 8px;
  font-size: 11px;
  padding: 2px 10px;
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &:hover:before {
    content: "";
    width: 4px;
    height: 100%;
    background: blue;
    transition: all 300ms ease;
  }

  &:hover {
    height: 3rem;
    width: 94%;
    background: #ffffff;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    & .nonbold {
      color: #5595f3;
    }
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
`;

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 85px;
  height: 85px;
  border-radius: 100%;
`;

export const NameWrap = styled.div`
  font-size: 11px;
  font-weight: bold;
  margin-top: 7px;
`;

export const EmailWrap = styled.div`
  color: gray;
  opacity: 0.8;
  font-size: 12px;
  margin-top: 5px;
`;

export const UpgradeButton = styled.button`
  border: none;
  color: white;
  background: #0db46e;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 9px 8px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 11px;
  cursor: pointer;
`;

export const Plan = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
  width: 80%;
  font-weight: bold;
`;

export const SidebarFooter = styled.div`
  display: flex;
  background: #e8f0f7;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
`;

export const UsageWrap = styled.div`
  width: 80%;
  background: #b8e8e1;
  border-radius: 6px;
  height: 4px;
`;

export const ProgressBar = styled.div`
  background: #37aa81;
  border-radius: 6px;
  height: 4px;
  width: 50%;
`;

export const PlanWrap = styled.div`
  font-weight: bold;
  color: #53b894;
  margin-top: 8px;
  font-size: 11px;
`;
