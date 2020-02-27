import React from 'react'
import {loadArticles} from '../actions/articles'
import {connect} from 'react-redux'
import ArticlesList from './ArticlesList'

class ArticlesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    return <ArticlesList articles={this.props.articles} />
  }
}

const mapStateToProps = state => ({
  articles: state.articles
})

export default connect(mapStateToProps, {loadArticles})(ArticlesListContainer)