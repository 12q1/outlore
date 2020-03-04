import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import tileData from './tileData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 5
  },
  description: {
    fontSize: 14,
  },
  expand: {
    transform: 'rotate(0deg)',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    fontSize: 16,
    fontWeight: 700
  },
  sources: {
    fontSize: 12,
  },
  card: {
    display: "flex",
  }
});


const ArticleList = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  if (props.articles.length === 0) {
    return null
  } else {

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const renderArticle = (article) => {
      return (
        <Grid item xs key={article.url}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Link href={article.url}>
                <Typography className={classes.title} color="textSecondary">
                  {article.title}
                </Typography>
              </Link>
              <Typography className={classes.sources} color="textSecondary">
                {article.author} ({article.source.name})
              </Typography>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <CardMedia
                    className={classes.media}
                    src={article.urlToImage}
                    title="Paella dish"
                  />
                  <Typography className={classes.description} color="textSecondary" paragraph>
                    {article.description}
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      )
    }

    return (
      <div className={classes.root}>
        <Grid>
          {props.articles[0].map(article => renderArticle(article))}
        </Grid>
      </div>
    )
  }

}

export default ArticleList