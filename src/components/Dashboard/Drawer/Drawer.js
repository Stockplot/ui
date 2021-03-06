import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Styles from "./styles";
import getData from "../getCandlestickData";
import getBBData from "../getBBdata";
import getRSIData from "../getRSIData";
import getMACDData from "../getMACDData";
import Ticker from "./Ticker";
import Hyperparameter from "./Hyperparameters";

const DashboardDrawer = (props) => {
  const useStyles = Styles;
  const classes = useStyles();

  let ticker = props.ticker;
  let setTicker = props.setTicker;
  let startDate = props.startDate;
  let setStartDate = props.setStartDate;
  let endDate = props.endDate;
  let setEndDate = props.setEndDate;
  let chartType = props.chartType;
  let setChartType = props.setChartType;

  // let setBBData = props.setBBData;
  let BBAmount = props.BBAmount;
  let setBBAmount = props.setBBAmount;
  let BBWindow = props.BBWindow;
  let setBBWindow = props.setBBWindow;
  let BBSDFactor = props.BBSDFactor;
  let setBBSDFactor = props.setBBSDFactor;

  let RSIAmount = props.RSIAmount;
  let setRSIAmount = props.setRSIAmount;
  let RSIWindow = props.RSIWindow;
  let setRSIWindow = props.setRSIWindow;
  let RSIUpperBand = props.RSIUpperBand;
  let setRSIUpperBand = props.setRSIUpperBand;
  let RSILowerBand = props.RSILowerBand;
  let setRSILowerBand = props.setRSILowerBand;

  let MACDUpperBand = props.MACDUpperBand;
  let MACDAmount = props.MACDAmount;
  let setMACDAmount = props.setMACDAmount;
  let setMACDUpperBand = props.setMACDUpperBand;
  let MACDLowerBand = props.MACDLowerBand;
  let setMACDLowerBand = props.setMACDLowerBand;
  let MACDBuyLimit = props.MACDBuyLimit;
  let setMACDBuyLimit = props.setMACDBuyLimit;
  let MACDSellLimit = props.MACDSellLimit;
  let setMACDSellLimit = props.setMACDSellLimit;

  const handleTickerChange = (event, value) => {
    setTicker(value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const handleSubmit = async () => {
    if (chartType === "CS") {
      props.setChartData([]);
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
        },
      };
      props.setChartData(await getData(data));
    } else if (chartType === "BB") {
      props.setBBData({});
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          window: BBWindow,
          sdfactor: BBSDFactor,
          investment: BBAmount
        },
      };
      props.setBBData(await getBBData(data));
    } else if (chartType === "RSI") {
      props.setRSIData({});
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          window: RSIWindow,
          upper_band: RSIUpperBand,
          lower_band: RSILowerBand,
          investment: RSIAmount,
        },
      };
      props.setRSIData(await getRSIData(data));
    } else if (chartType === "MACD") {
      props.setMACDData({});
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          upper_band: 70,
          lower_band: 30,
          buy_lim: 1,
          sell_lim: -1,
          investment: MACDAmount,
        },
      };
      props.setMACDData(await getMACDData(data));
    }
  };

  return (
    <div className={{ textAlign: "center" }}>
      <div className={classes.toolbar} />
      <Divider />
      <Ticker
        value={ticker}
        handleChange={handleTickerChange}
        setTicker={setTicker}
      />
      {/* <Ticker value={ticker} handleChange={handleTickerChange} /> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start date"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.drawerItem}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End date"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.drawerItem}
        />
      </MuiPickersUtilsProvider>
      <FormControl className={classes.tickerList}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{ textAlign: "left" }}
          value={chartType}
          onChange={handleChartTypeChange}
        >
          <MenuItem value={"CS"}>Candlesticks</MenuItem>
          <MenuItem value={"BB"}>Bollinger Bands</MenuItem>
          <MenuItem value={"RSI"}>RSI</MenuItem>
          <MenuItem value={"MACD"}>MACD</MenuItem>
        </Select>
      </FormControl>
      <Hyperparameter
        MACDAmount={MACDAmount}
        setMACDAmount={setMACDAmount}
        MACDUpperBand={MACDUpperBand}
        setMACDUpperBand={setMACDUpperBand}
        MACDLowerBand={MACDLowerBand}
        setMACDLowerBand={setMACDLowerBand}
        MACDBuyLimit={MACDBuyLimit}
        setMACDBuyLimit={setMACDBuyLimit}
        MACDSellLimit={MACDSellLimit}
        setMACDSellLimit={setMACDSellLimit}
        RSIAmount={RSIAmount}
        setRSIAmount={setRSIAmount}
        RSIWindow={RSIWindow}
        setRSIWindow={setRSIWindow}
        RSIUpperBand={RSIUpperBand}
        setRSIUpperBand={setRSIUpperBand}
        RSILowerBand={RSILowerBand}
        setRSILowerBand={setRSILowerBand}
        BBAmount={BBAmount}
        setBBAmount={setBBAmount}
        BBWindow={BBWindow}
        setBBWindow={setBBWindow}
        BBSDFactor={BBSDFactor}
        setBBSDFactor={setBBSDFactor}
        chartType={chartType}
        className={classes.drawerItem}
      />
      <Button
        variant="contained"
        
        onClick={handleSubmit}
        className={classes.submit}
        style={{border:"4px solid white",color:"black",backgroundColor:"#a4d3f8"}}
      >
        Submit
      </Button>
    </div>
  );
};

export default DashboardDrawer;
