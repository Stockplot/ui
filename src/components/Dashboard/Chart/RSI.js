import React, { useState, useLayoutEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = (props) => {

  let rsi = props.res;

  const data = {
    labels: rsi.dates,
    datasets: [
      {
        label: "RSI Value",
        data: rsi.val,
        fill: false,
        backgroundColor: "#1eae98",
        borderColor: "rgba(255, 99, 132, 0.2)",
      }
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
