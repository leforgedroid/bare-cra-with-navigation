import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import zIndex from "@material-ui/core/styles/zIndex";
//"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
export const Header: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      //className={classes.headerContainer}
      wrap={"nowrap"}
    >
      <div className={classes.container}>
        <svg viewBox="0 0 515 200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <path
              id="svg_8"
              d="m-0.195014,-107.438008c193.666686,-97.587646 387.333333,97.587639 580.99998,0l0,175.657734c-193.666647,97.587654 -387.333294,-97.587631 -580.99998,0l0,-175.657734z"
              fill-opacity="50%"
              fill="#fff"
              preserveAspectRatio="none meet"
            />
          </g>
        </svg>
      </div>
      <Grid item>
        <Link to="/">
          <MenuItem className={classes.headerLink}>Home</MenuItem>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/about">
          <MenuItem className={classes.headerLink}>About</MenuItem>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/users">
          <MenuItem className={classes.headerLink}>Users</MenuItem>
        </Link>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
        alignContent={"center"}
        justify={"flex-end"}
      >
        <div style={{ color: "black", marginRight: "10px" }}>TEST</div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  headerContainer: {
    textDecoration: "none",
    // background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    padding: "5px 0 5px 0"
    // boxShadow: "0 3px 5px 2px rgba(200, 200, 200, .3)"
  },
  headerLink: {
    color: "#000000",
    padding: "0 20px"
  },
  svg: {
    background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0
  },
  container: {
    // background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    display: "inline-block",
    position: "absolute",
    width: "100%",
    height: "400px",
    paddingBottom: "100%",
    verticalAlign: "middle",
    overflow: "hidden",
    zIndex: 0
  }
});
