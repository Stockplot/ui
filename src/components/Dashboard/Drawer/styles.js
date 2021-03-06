import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  drawerItem: {
    margin: "20px 10px 10px 10px",
  },
  tickerList: {
    width: "90%",
    marginTop: "20px",
  },
  params: {
    margin: "20px 0px 10px 0px",
  },
  submit: {
    marginTop: "20px",
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

export default styles;
