const rootReducer = (state, action) => {

  switch (action.type) {
    case "SET_NEWS_FEED":
      return {
        ...state,
        articles: action.payload
      }

    default:
      return state
  }

}

export default rootReducer