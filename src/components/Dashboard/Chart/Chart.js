import Candlesticks from "./CandleSticks";
import BBand from "./BBand";

let ChartJS = (props) => {
  console.log(props);
  switch(props.chartType) {
    case "CS":
      return <Candlesticks data={props.data} />
    case "BB":
      return <BBand />
    default:
      return <Candlesticks data={props.data} />
  }
};

export default ChartJS;
