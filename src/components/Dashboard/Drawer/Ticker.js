/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import tickername from "./TickerData";

import Styles from "./styles";

export default function Ticker(props) {
  const useStyles = Styles;
  const classes = useStyles();
  const tickerList = [];
  for (var i = 0; i < tickername.length; i++) {
    tickerList.push(tickername[i]);
  }

  return (
    <Autocomplete
      className={classes.drawerItem}
      id="Ticker"
      options={tickerList}
      getOptionLabel={(option) => option}
      value={props.value}
      onChange={props.handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Ticker" />
      )}
    />
  );
}
