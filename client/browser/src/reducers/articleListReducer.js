const initialState = []

const articleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ARTICLES_FETCHED": {
            //console.log(action)
            return [...state, action.payload]
        }
        default: {
            return state
        }

    }
}

export default articleListReducer