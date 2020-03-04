import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
}));


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
        <Grid item xs={randomNumber(1, 12)} key={article.url}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Link href={article.url}>
                <Typography className={classes.title} color="textSecondary">
                  {article.title}
                </Typography>
              </Link>
              <Typography className={classes.description} color="textSecondary">
                {article.description}
              </Typography>
              <Typography className={classes.sources} color="textSecondary">
                {article.author} ({article.source.name})
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    }

    const renderArticleGridList = (article) => {
      return (
        <GridListTile key={article.url} cols={randomNumber(1,2)}>
          <img src={article.urlToImage} alt={article.title} />
        </GridListTile>
      )
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {props.articles[0].map(article => renderArticleGridList(article))}
        </GridList>
      </div>
    )
  }

}

export default ArticleList