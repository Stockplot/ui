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
            label="Lookback Period"
            value={props.BBWindow}
            className={classes.drawerItem}
            onChange={(e) => {props.setBBWindow(e.target.value)}}
          />
          <TextField
            id="standard-basic"
            label="SD Factor"
            value={props.BBSDFactor}
            className={classes.drawerItem}
            onChange={(e) => {props.setBBSDFactor(e.target.value)}}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default Hyperparameter;
