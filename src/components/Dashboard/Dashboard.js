import React, { useLayoutEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import "date-fns";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import Chart from "./Chart/Chart";
import DashboardDrawer from "./Drawer/Drawer";
import Styles from "./styles";
import getCandlestickData from "./getCandlestickData";
import getBBData from "./getBBdata";
import getRSIData from "./getRSIData";

const useStyles = Styles;

function ResponsiveDrawer(props) {

  //Common params

  let [chartData, setChartData] = useState([]);
  let [chartType, setChartType] = useState("CS");
  let [ticker, setTicker] = useState("BAJFINANCE.NS");
  let [startDate, setStartDate] = useState(new Date(2018, 1, 1));
  let [endDate, setEndDate] = useState(new Date(2020, 11, 30));
  
  //BB params
  
  let [BBData, setBBData] = useState({});
  let [BBWindow, setBBWindow] = useState(20);
  let [BBSDFactor, setBBSDFactor] = useState(2);
  
  //RSI params
  
  let [RSIData, setRSIData] = useState({});
  let [RSIWindow, setRSIWindow] = useState(30);
  let [RSIUpperBand, setRSIUpperBand] = useState(70);
  let [RSILowerBand, setRSILowerBand] = useState(30);

  useLayoutEffect(() => {
    (async () => {
      const data = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
        },
      };

      setChartData(await getCandlestickData(data));
      const reqData = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          window: 20,
          sdfactor: 2,
        },
      };

      setBBData(await getBBData(reqData));

      const RSIReqData = {
        context: {
          ticker: ticker,
          start: startDate.toISOString().substring(0, 10),
          end: endDate.toISOString().substring(0, 10),
          window: 30,
          upper_band: 70,
          lower_band: 30
        }
      };

      setRSIData(await getRSIData(RSIReqData));

    })();
  }, []);

  let { mobileDrawerOpen, setMobileDrawerOpen } = props;

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
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
            <DashboardDrawer
              chartType={chartType}
              setChartType={setChartType}
              setChartData={setChartData}
              ticker={ticker}
              setTicker={setTicker}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setBBData={setBBData}
              BBWindow={BBWindow}
              setBBWindow={setBBWindow}
              BBSDFactor={BBSDFactor}
              setBBSDFactor={setBBSDFactor}
              RSIData={RSIData}
              setRSIData={setRSIData}
              RSIWindow={RSIWindow}
              setRSIWindow={setRSIWindow}
              RSIUpperBand={RSIUpperBand}
              setRSIUpperBand={setRSIUpperBand}
              RSILowerBand={RSILowerBand}
              setRSILowerBand={setRSILowerBand}
            />
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
            <DashboardDrawer
              chartType={chartType}
              setChartType={setChartType}
              setChartData={setChartData}
              ticker={ticker}
              setTicker={setTicker}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setBBData={setBBData}
              BBWindow={BBWindow}
              setBBWindow={setBBWindow}
              BBSDFactor={BBSDFactor}
              setBBSDFactor={setBBSDFactor}
              RSIData={RSIData}
              setRSIData={setRSIData}
              RSIWindow={RSIWindow}
              setRSIWindow={setRSIWindow}
              RSIUpperBand={RSIUpperBand}
              setRSIUpperBand={setRSIUpperBand}
              RSILowerBand={RSILowerBand}
              setRSILowerBand={setRSILowerBand}
            />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Chart
          BBData={BBData}
          ticker={ticker}
          startDate={startDate}
          endDate={endDate}
          data={chartData}
          chartType={chartType}
          RSIData={RSIData}
        ></Chart>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
