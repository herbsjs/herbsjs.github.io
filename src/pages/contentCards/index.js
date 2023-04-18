import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import Card from "../../components/imgMediaCard";
import { contentList } from "../../../docs/project/contents";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function AltCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {contentList.map((elem) => (
          <Grid item xs={12} sm={4} md={4} key={contentList.indexOf(elem)}>
            <Card {...elem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
