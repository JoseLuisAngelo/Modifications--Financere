import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    paddingLeft: theme.spacing(-10),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
  
  },
  name: {
    fontWeight: 900,
    margin: "5px",

  },
  title: {
    flexGrow: 4,
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "30px",
    letterSpacing: 0.3,
    marginLeft:20
  },

  avatar: {
    width:25,
    height:25,
    borderRadius: "50%",
  },

}));
