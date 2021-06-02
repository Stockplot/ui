import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 0,
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
  progress: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
}));

export default styles;
