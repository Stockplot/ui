import React, { useLayoutEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import "date-fns";
import CircularProgress from "@material-ui/core/CircularProgress";

import Chart from "./Chart/Chart";
import DashboardDrawer from "./Drawer/Drawer";
import Styles from "./styles";
import getData from './getData';

const useStyles = Styles;

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
            <DashboardDrawer></DashboardDrawer>
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
            <DashboardDrawer></DashboardDrawer>
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {chartData.length === 0 ? (
          <CircularProgress />
        ) : (
          <Chart data={chartData}></Chart>
        )}
      </main>

    </div>
  );
}

export default ResponsiveDrawer;
