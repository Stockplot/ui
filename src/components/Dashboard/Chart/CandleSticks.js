import React from "react";
import { scaleTime } from "d3-scale";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

let CandleSticks = (props) => {
  const data = props.data;
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  const xAccessor = (d) => {
    return d.date;
  };

  return (
    <div className="CandleSticks">
      <ChartCanvas
        height={vh - 120}
        ratio={1}
        width={vw - 300}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={"svg"}
        data={data}
        seriesName="MSFT"
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={[new Date(2018, 1, 1), new Date(2020, 11, 30)]}
      >
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

CandleSticks = fitWidth(CandleSticks);

export default CandleSticks;
