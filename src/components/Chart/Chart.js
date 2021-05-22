import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import MadeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

const getData = async (data) => {
  console.log(data);

  const res = await axios.post(
    "https://secret-reaches-87237.herokuapp.com/",
    data
  );
  console.log("foo");
  console.log(res);

  let dataArray = [];

  Array(res["data"]["length"])
    .fill(0)
    .map((_, i) => {
      dataArray.push(res["data"]["data"][i]);
      dataArray[i]["Date"] = new Date(dataArray[i]["Date"]);
    });
  // console.log(dataArray);
  return dataArray;
};

let StockChart = () => {
  //   const { type, width, ratio } = props;
  const type = "svg";
  const width = 10;
  const ratio = 0.1;
  const [stockData, setStockData] = useState(null);

  const data = {
    context: {
      ticker: "MSFT",
      start: "2018-01-01",
      end: "2020-11-30",
    },
  };

  // let stockData = null;

  const xAccessor = async (d) => {
    if(d) {
    return await d["date"];
    } else {
      return 10;
    }
  };
  // console.log(data);
  // console.log("useEffect");

  useEffect(() => {
    (async () => {
      setStockData(await getData(data));
      console.log(stockData);
    })();
}, []);

  return (
    <div>
      Data is{" "}
      {stockData ? (
        <div className="StockChart">
          <ChartCanvas
            height={400}
            ratio={ratio}
            width={width}
            margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
            type={type}
            data={MadeData}
            seriesName="MSFT"
            xAccessor={xAccessor}
            xScale={scaleTime()}
            xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
          >
            <Chart id={1} yExtents={(d) => [d.high, d.low]}>
              <XAxis axisAt="bottom" orient="bottom" ticks={6} />
              <YAxis axisAt="left" orient="left" ticks={5} />
              <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
            </Chart>
          </ChartCanvas>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

// StockChart.prototype = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.number.isRequired,
//   ratio: PropTypes.number.isRequired,
//   type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// };

// StockChart.defaultProps = {
//   type: "svg",
// };

StockChart = fitWidth(StockChart);

export default StockChart;
