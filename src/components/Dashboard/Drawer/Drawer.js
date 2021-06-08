import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
import Ticker from "./Ticker";
import Hyperparameter from "./Hyperparameters";
import TickerNew from "./TickeNew";

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
  let setBBData = props.setBBData;

  let BBWindow = props.BBWindow;
  let setBBWindow = props.setBBWindow;
  let BBSDFactor = props.BBSDFactor;
  let setBBSDFactor = props.setBBSDFactor;

  let RSIWindow = props.RSIWindow;
  let setRSIWindow = props.setRSIWindow;
  let RSIUpperBand = props.RSIUpperBand;
  let setRSIUpperBand = props.setRSIUpperBand;
  let RSILowerBand = props.RSILowerBand;
  let setRSILowerBand = props.setRSILowerBand;

  const handleTickerChange = (e) => {
    console.log(e.target.value);
    setTicker(e.target.value);
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
          upper_band: 70,
          lower_band: 30
        },
      };
      props.setRSIData(await getRSIData(data));
    }
  };

  return (
    <div className={{ textAlign: "center" }}>
      <div className={classes.toolbar} />
      <Divider />
      {/* <TickerNew value={ticker} handleChange={handleTickerChange}/> */}
      <Ticker value={ticker} handleChange={handleTickerChange} />
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
        </Select>
      </FormControl>
      <Hyperparameter
        RSIWindow={RSIWindow}
        setRSIWindow={setRSIWindow}
        RSIUpperBand={RSIUpperBand}
        setRSIUpperBand={setRSIUpperBand}
        RSILowerBand={RSILowerBand}
        setRSILowerBand={setRSILowerBand}
        BBWindow={BBWindow}
        setBBWindow={setBBWindow}
        BBSDFactor={BBSDFactor}
        setBBSDFactor={setBBSDFactor}
        chartType={chartType}
        className={classes.drawerItem}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.submit}
      >
        Submit
      </Button>
    </div>
  );
};

export default DashboardDrawer;
