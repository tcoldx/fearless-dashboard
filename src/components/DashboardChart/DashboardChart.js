import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./DashboardChart.styles";

const DashboardChart = (props) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    return {
      labels: ["Oct 25", "Oct 26", "Oct 27", "Oct 28", "Oct 29", "Oct 30"],
      datasets: [
        {
          lineTension: 0.3,
          label: "BTC",
          pointRadius: 0,
          data: [121, 400, 100, 400, 800],
          fill: true,
          responsive: true,
          borderColor: "#FFFFFF",
          backgroundColor: "#266cfe",
          borderWidth: 2,
          borderRadius: 10,
          barThickness: 48,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      layout: {
        padding: 15,
        maintainAspectRatio: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          drawTicks: true,
          borderWidth: 0,
        },
        ticks: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: true,
        },
      },
    },
  };
  return (
    <Container>
      <Bar width={"100%"} height={35} data={data} options={options} />
    </Container>
  );
};

export default DashboardChart;
