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
import Ticker from "./Ticker";

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
    } else if(chartType === "BB") {
      props.setBBData({});
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          window: 20,
          sdfactor: 2,
        },
      };
      props.setBBData(await getBBData(data));
    }
  };

  return (
    <div className={{ textAlign: "center" }}>
      <div className={classes.toolbar} />
      <Divider />
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
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.drawerItem}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default DashboardDrawer;
