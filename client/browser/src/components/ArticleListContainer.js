import React from 'react'
import {loadArticles} from '../actions/articles'
import {connect} from 'react-redux'
import ArticleListItem from './ArticleListItem'

class ArticlesListContainer extends React.Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.loadArticles()
  }

  render() {
    return <ArticleListItem/>
  }
}

const mapStateToProps = state => ({
  articles: state.articles
})

export default connect(mapStateToProps, {loadArticles})(ArticlesListContainer)