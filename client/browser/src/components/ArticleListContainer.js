import React from 'react'
import {loadArticles} from '../actions/articles'
import {connect} from 'react-redux'
import ArticleList from './ArticleList'

class ArticlesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    //console.log(this.props)
    return <ArticleList articles={this.props.articles} />
  }
}

const mapStateToProps = state => ({
  articles: state.articleList
})

export default connect(mapStateToProps, {loadArticles})(ArticlesListContainer)