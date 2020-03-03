import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  description: {
    fontSize: 14,
  },
  title: {
    fontSize: 16
  },
  sources: {
    fontSize: 10,
  },
  card: {
    minWidth: "250px"
  }
});


const ArticleList = (props) => {
  const classes = useStyles();

  if (props.articles.length === 0) {
    return null
  } else {

    const randomNumber = (min, max) => {
      return Math.round(min + Math.random() * (max - min));
    }

    const renderArticle = (article) => {
      return (
        <Grid item xs key={article.url}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {article.title}
              </Typography>
              <Typography className={classes.description} color="textSecondary">
                {article.description} by {article.author} for {article.source.name}
              </Typography>
              <Typography className={classes.sources} color="textSecondary">
                by {article.author} ({article.source.name})
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          {props.articles[0].map(article => renderArticle(article))}
        </Grid>
      </div>
    )
  }

}

export default ArticleList