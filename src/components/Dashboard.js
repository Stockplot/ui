import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Chart from "./Chart/Chart";
import ChartJS from "./Chart/ChartJS";

import axios from "axios";

const getData = async (data) => {
  console.log(data);

  const res = await axios.post("http://127.0.0.1:5000/", data);
  console.log("foo");
  console.log(res);

  let dataArray = [];

  Array(res["data"]["length"])
    .fill(0)
    .map((_, i) => {
      dataArray.push(res["data"]["data"][i]);
      dataArray[i]["date"] = new Date(dataArray[i]["date"]);
    });
  console.log(dataArray);
  return dataArray;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerItem: {
    margin: "10px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    textAlign: "center",
    zIndex: -1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  let [chartData, setChartData] = useState([]); 

  useLayoutEffect(() => {
    (async () => {
      const data = {
        context: {
          ticker: "MSFT",
          start: "2018-01-01",
          end: "2020-11-30",
        },
      };

      setChartData(await getData(data));
      console.log(chartData);
    })();
  }, []);

  let { mobileDrawerOpen, setMobileDrawerOpen } = props;
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const drawer = (
    <div className={{ textAlign: "center" }}>
      <div className={classes.toolbar} />
      <Divider />
      <TextField
        id="outlined-basic"
        label="Ticker"
        variant="outlined"
        className={classes.drawerItem}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.drawerItem}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.drawerItem}
        />
      </MuiPickersUtilsProvider>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {chartData.length === 0 ? (
          "Loading..."
        ) : (
          <ChartJS data={chartData}></ChartJS>
        )}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
