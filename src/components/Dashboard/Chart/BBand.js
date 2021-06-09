import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {

  let bb = props.res;

  const data = {
    labels: bb.date,
    datasets: [
      {
        label: "Closing Price",
        data: bb.close,
        fill: false,
        backgroundColor: "#1eae98",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Upper band",
        data: bb.uband,
        fill: false,
        backgroundColor: "#f55c47",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Lower band",
        data: bb.lband,
        fill: false,
        backgroundColor: "#f55c47",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  
  return <Line style={{ width: "90%" }} data={data} options={options} />;
};

export default LineChart;
