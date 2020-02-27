import request from 'superagent'

export const ARTICLES_FETCHED = 'ARTICLES_FETCHED'

const baseUrl = 'http://localhost:5000'

const articlesFetched = articles => ({
  type: ARTICLES_FETCHED,
  articles
})

export const loadArticles = () => (dispatch, getState) => {
  // when the state already contains articles, we don't fetch them again
  if (getState().articles) return

  // a GET /articles request
  request(`${baseUrl}/news`)
    .then(response => {
      // dispatch an ARTICLES_FETCHED action that contains the articles
      dispatch(articlesFetched(response.body))
    })
    .catch(console.error)
}