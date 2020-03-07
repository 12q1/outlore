import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 5
  },
  description: {
    fontSize: 14,
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 700
  },
  sources: {
    fontSize: 12,
  },
  card: {
    minWidth: 300
  }
});


const ArticleGrid = (props) => {
  const classes = useStyles();
  if (props.articles.length === 0) {
    return null
  } else {
    const handleImage = (image, sourceId) => {
      if (image) {
        return image
      } else {
        return image
      }
    }//TODO need to handle null images

    const renderArticle = (article) => {
      return (
        <Grid item xs key={article.url}>
          <Card className={classes.card} variant="outlined">
            <CardMedia
              className={classes.media}
              image={handleImage(article.urlToImage, article.source.id)}
              title={article.title}
            />
            <CardContent>
              <Link href={article.url}>
                <Typography className={classes.title} color="textSecondary">
                  {article.title}
                </Typography>
              </Link>
              <Typography className={classes.sources} color="textSecondary">
                {article.author} ({article.source.name})
              </Typography>
              <Typography className={classes.description} color="textSecondary" paragraph>
                {article.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Save
                </Button>
              <Button size="small" color="primary">
                Comments
                </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {props.articles[0].map(article => renderArticle(article))}
        </Grid>
      </div>
    )
  }

}

export default ArticleGrid