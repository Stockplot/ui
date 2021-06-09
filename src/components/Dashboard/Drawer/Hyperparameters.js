import TextField from "@material-ui/core/TextField";

import Styles from "./styles";

const Hyperparameter = (props) => {
  const useStyles = Styles;
  const classes = useStyles();

  switch (props.chartType) {
    case "BB":
      return (
        <>
          <TextField
            id="standard-basic"
            label="Amount"
            value={props.BBAmount}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setBBAmount(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Lookback Period"
            value={props.BBWindow}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setBBWindow(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="SD Factor"
            value={props.BBSDFactor}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setBBSDFactor(e.target.value);
            }}
          />
        </>
      );
    case "RSI":
      return (
        <>
          <TextField
            id="standard-basic"
            label="Amount"
            value={props.RSIAmount}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setRSIAmount(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Lookback Period"
            value={props.RSIWindow}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setRSIWindow(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Lower Band"
            value={props.RSILowerBand}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setRSILowerBand(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Upper Band"
            value={props.RSIUpperBand}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setRSIUpperBand(e.target.value);
            }}
          />
        </>
      );
    case "MACD":
      return (
        <>
          <TextField
            id="standard-basic"
            label="Amount"
            value={props.MACDAmount}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setMACDAmount(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Upper Band"
            value={props.MACDUpperBand}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setMACDUpperBand(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Lower Band"
            value={props.MACDLowerBand}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setMACDLowerBand(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Buy Limit"
            value={props.MACDBuyLimit}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setMACDBuyLimit(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Sell Limit"
            value={props.MACDSellLimit}
            className={classes.drawerItem}
            onChange={(e) => {
              props.setMACDSellLimit(e.target.value);
            }}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default Hyperparameter;
