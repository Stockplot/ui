import React from "react";
import { Line } from "react-chartjs-2";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

  const rows = [];

  for (let i = 0; i < rsi.signals.length; i++) {
    rows.push({
      date: rsi.signalDates[i],
      signal: rsi.signals[i] === "1" ? "BUY" : "SELL",
      investedAmount: rsi.investedAmount[i].toFixed(2),
      liquidAmount: rsi.liquidAmount[i].toFixed(2),
      totalAmount: rsi.totalAmount[i].toFixed(2),
      pnl: rsi.pnl[i].toFixed(2),
    });
  }
  return (
    <>
      <Line style={{ width: "90%" }} data={data} options={options} />
      <TableContainer style={{marginTop: "25px"}} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Signal</TableCell>
              <TableCell align="right">Invested Amount</TableCell>
              <TableCell align="right">Liquid Amount</TableCell>
              <TableCell align="right">Total Amount</TableCell>
              <TableCell align="right">Trade Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.signal}</TableCell>
                <TableCell align="right">{row.investedAmount}</TableCell>
                <TableCell align="right">{row.liquidAmount}</TableCell>
                <TableCell align="right">{row.totalAmount}</TableCell>
                <TableCell align="right">{row.pnl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LineChart;
