const initialState = {
    articles: null
}

const articleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ARTICLES_FETCHED": {
            return {
                ...state,
                articles: action.payload
            }
        }
        default: {
            return state
        }

    }
}

export default articleListReducer