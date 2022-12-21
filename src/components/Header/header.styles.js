import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 2,
  },
  name: {
    flexGrow: 4,
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
  },
  title: {
    flexGrow: 4,
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
    marginLeft:20
  },

  imagen: {
    borderRadius: "50%",
  },
}));
