import React from "react";
import { DashboardChart } from "components";
import {
  Container,
  InsightContainer,
  DateContainer,
  ChartContainer,
  Top,
  ContainerWrap,
  TopLeft,
  Right,
  SideInsightContainer,
  FooterContentContainer,
  FooterWrap,
} from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <ContainerWrap>
        <Top>
          <TopLeft>
            <h3>Dashboard</h3>
            <span>Fraud Protection</span>
          </TopLeft>
          <DateContainer>
            <input type="date" />
            <input type="date" value="2001-10-23" />
          </DateContainer>
        </Top>

        <InsightContainer>
          <div className="sales">
            <span className="material-icons">wifi_lock</span>
            <div className="middle">
              <h3>Blocked Ips</h3>
              <h1>1,352</h1>
              <div className="progress"></div>
              <small>20% of all CPC Ips</small>
              <div className="details">view score details</div>
            </div>
          </div>

          <div className="sales">
            <span className="material-icons">analytics</span>
            <div className="middle">
              <h3>Total Saved</h3>
              <h1>950</h1>

              <div className="progress"></div>
              <small>200% click + $0.5 CPC avg</small>
            </div>
          </div>

          <div className="sales">
            <span className="material-icons">credit_score</span>
            <div className="middle">
              <h3>Fraud Score</h3>
              <h1>4.6</h1>
              <div className="progress"></div>
              <small>out of 10</small>
              <div className="details">view score details</div>
            </div>
          </div>
        </InsightContainer>
        {/* end of insight */}
        <ChartContainer>
          <DashboardChart />
        </ChartContainer>
        {/* end of table*/}

        <SideInsightContainer>
          <div className="sales">
            <span className="material-icons">supervisor_account</span>
            <div className="middle">
              <h1 className="content">120</h1>
              <div className="progress"></div> <small>Organic Visitors</small>
            </div>
          </div>

          <div className="sales">
            <span className="material-icons">group_work</span>
            <div className="middle">
              <div className="left">
                <h1 className="content">900</h1>
              </div>
              <div className="progress"></div>{" "}
              <small>Visitors From Advertising</small>
            </div>
          </div>

          <div className="sales">
            <span className="material-icons">policy</span>
            <div className="middle">
              <div className="left">
                <h1 className="content">20.1%</h1>
              </div>
              <div className="progress"></div>{" "}
              <small>Fraud Detection Rate</small>
            </div>
          </div>

          <div className="sales">
            <span className="material-icons">query_stats</span>
            <div className="middle">
              <div className="left">
                <h1 className="content">87.3%</h1>
              </div>
              <div className="progress"></div>
              <small>Ads Click Rate</small>
            </div>
          </div>
        </SideInsightContainer>
      </ContainerWrap>
    </Container>
  );
};

export default Home;
