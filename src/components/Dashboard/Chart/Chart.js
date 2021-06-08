import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

import Candlesticks from "./CandleSticks";
import BBand from "./BBand";
import RSI from "./RSI";
import MACD from "./MACD";
import Styles from "../styles";

let ChartJS = (props) => {
  const useStyles = Styles;
  const classes = useStyles();
  switch (props.chartType) {
    case "CS":
      if (props.data.length === 0) {
        // return <CircularProgress className={classes.progress} />;
        return <img src="https://media.giphy.com/media/l150Tal3EKqgj0v9gs/giphy.gif" style={{
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
        }}/>
      } else {
        return <Candlesticks data={props.data} />;
      }
    case "BB":
      if (Object.keys(props.BBData).length === 0) {
        return <img src="https://media.giphy.com/media/l150Tal3EKqgj0v9gs/giphy.gif" style={{
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
        }}/>
      } else {
        return (
          <BBand
            res={props.BBData}
            ticker={props.ticker}
            startDate={props.startDate}
            endDate={props.endDate}
          />
        );
      }
    case "RSI":
      if (Object.keys(props.RSIData).length === 0) {
        return <img src="https://media.giphy.com/media/l150Tal3EKqgj0v9gs/giphy.gif" style={{
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
        }}/>
      } else {
        return <RSI res={props.RSIData} />;
      }
    case "MACD":
      if (Object.keys(props.MACDData).length === 0) {
        return <CircularProgress className={classes.progress} />;
      } else {
        return <MACD res={props.MACDData} />;
      }
    default:
      if (props.data.length === 0) {
        return <img src="https://media.giphy.com/media/l150Tal3EKqgj0v9gs/giphy.gif" style={{
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
        }}/>
      } else {
        return <Candlesticks data={props.data} />;
      }
  }
};

export default ChartJS;
