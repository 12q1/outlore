import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
//import tileData from './tileData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 5
  },
  description: {
    fontSize: 14,
  },
  media: {
    height: 100,
    width: 150
  },
  title: {
    fontSize: 16,
    fontWeight: 700
  },
  card: {
    width: 1,
  }
});


const ArticleList = (props) => {
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
        <ListItem key={article.url}>
          <Card>
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
            </CardContent>
          </Card>
        </ListItem>
      )
    }

    return (
      <div className={classes.root}>
        <List>
          {props.articles[0].map(article => renderArticle(article))}
        </List>
      </div>
    )
  }
}

export default ArticleList