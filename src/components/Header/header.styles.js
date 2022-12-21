import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
 
  content: {

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
  profile:{

  },
}));
