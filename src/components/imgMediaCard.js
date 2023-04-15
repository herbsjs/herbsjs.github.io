import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Twitter from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: "cover",
    color: "black",
  },
  author: {
    marginBottom: 12,
    fontSize: 12,
  },
};

function ImgMediaCard(props) {
  const { classes, image, title, desc, author, lang } = props;
  return (
    <Card className={classes.card}>
      <Link to="/Blog" style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="140"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              component="p"
              className={classes.author}
              color="textSecondary"
            >
              {`by: ${author}`}
              <br />
              {`language: ${lang}`}
            </Typography>
            <Typography component="p" color="textPrimary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
