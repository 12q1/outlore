import React from 'react'
import {loadArticles} from '../actions/articles'
import {connect} from 'react-redux'
import ArticleGrid from './ArticleGrid'

class ArticlesGridContainer extends React.Component {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    //console.log(this.props)
    return <ArticleGrid articles={this.props.articles} />
  }
}

const mapStateToProps = state => ({
  articles: state.articleList
})

export default connect(mapStateToProps, {loadArticles})(ArticlesGridContainer)