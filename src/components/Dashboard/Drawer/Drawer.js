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
import getData from "../getData";
import Ticker from "./Ticker";

const DashboardDrawer = (props) => {
  const useStyles = Styles;
  const classes = useStyles();

  let [ticker, setTicker] = useState("BAJFINANCE.NS");
  let [startDate, setStartDate] = useState(new Date(2018, 1, 1));
  let [endDate, setEndDate] = useState(new Date(2020, 11, 30));
  let chartType = props.chartType;
  let setChartType = props.setChartType;

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
    props.setChartData([]);
    console.log(startDate.toISOString().substring(0, 10));
    console.log(endDate.toISOString().substring(0, 10));
    console.log(ticker);
    const data = {
      context: {
        ticker: ticker,
        start: startDate.toISOString().substring(0, 10),
        end: endDate.toISOString().substring(0, 10),
      },
    };
    props.setChartData(await getData(data));
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
