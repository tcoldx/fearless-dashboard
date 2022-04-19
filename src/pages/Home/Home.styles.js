import styled from "styled-components";

export const ContainerWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 80vw;
`;

export const InsightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  & .sales {
    display: flex;
  }

  & .middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-left: 10%;
  }

  & > div {
    padding: 1rem;
    margin-top: 1rem;
    background: #ffffff;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    border-radius: 10px;
    transition: all 300ms ease;
    height: 140px;

    &:hover {
      box-shadow: none;
    }

    & h3 {
      font-size: 12px;
    }

    & span {
      color: #4e91f6;
      font-size: 60px;
      margin-top: 10px;
      padding: 10px 10px;
      background: #f2f5ff;
      height: 80px;
      border-radius: 100%;
    }

    & small {
      color: grey;
    }

    & .details {
      color: blue;
      cursor: pointer;
      font-size: 12px;
    }
  }
`;

export const SideInsightContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

  & .sales {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  & .middle {
    margin-left: 10px;
  }

  & small {
    color: grey;
  }

  & > div {
    width: 17.5rem;
    height: 120px;
    margin-top: 1rem;
    background: #ffffff;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    border-radius: 10px;
    transition: all 300ms ease;

    &:hover {
      box-shadow: none;
    }

    & span {
      font-size: 50px;
      color: #4e91f6;
      background: #f2f5ff;
      padding: 10px 10px;
      height: 70px;
      border-radius: 100%;
    }

& .content {
  font-size: 18px;  
}
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  margin-top: 2rem;
  display: column;
  margin-left: 20px;
`;

export const ChartContainer = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 23rem;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
`;

export const DateContainer = styled.div`
  display: flex;
  & input {
    border: none;
    background: #f6f7f9;
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & span {
    font-size: 11px;
  }
`;

export const ChartWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ebf4f4;
  box-shadow: 20px 20px 60px #c8cfcf, -20px -20px 60px #ffffff;
`;

export const NavWrap = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: fit-content;
`;

export const CustomSelect = styled.select`
  border: none;
  outline: none;
  background: transparent;
`;

export const NavLeft = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavHeader = styled.div`
  font-size: 12px;
`;

export const NavRightContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavDate = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  font-size: 13px;
  height: 25px;
  width: 250px;
`;

export const NavCustom = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
  font-size: 13px;
  height: 25px;
`;

export const Header = styled.div`
  font-weight: bold;
`;

export const StyledDate = styled.input`
  border: none;
  background: transparent;
  outline: none;
  resize: none;
  margin-left: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  background: cyan;
`;

export const FraudWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 400px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
  border-radius: 10px;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  height: 90px;
`;

export const FooterWrap = styled.div`
  border-radius: 5px;
  width: 30%;
  height: 80px;
  background: #ffffff;
  box-shadow: inset 5px 5px 10px #dbdbdb, inset -5px -5px 10px #ffffff;
`;
