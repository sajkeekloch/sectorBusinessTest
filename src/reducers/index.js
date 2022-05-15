const initialState = {
    posts: [],
    filterWord: '',
    filteredPosts: [],
    currentPage: 0,
    pagesCount: 0, 
    sortBy: {
        category: 'id',
        fromTop: true
    },
    loading: true,
    error: false
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQEST':
            return {
                ...state,
                posts: [],
                loading: true
            }
        case 'FETCH_POSTS_SUCCES':
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false
            }
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                posts: [],
                loading: false,
                error: true
            }
        case 'FILTER_WORD_CHANGE':
            return {
                ...state,
                filterWord: action.payload,
                currentPage: 0,
            }
        case 'CURRENT_PAGE_CHANGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SORTING_CHANGE':
            return {
                ...state,
                sortBy: {
                    category: action.payload.category,
                    fromTop: !state.sortBy.fromTop
                }
            }
        case 'FILTER':
            return {
                ...state
            }
        default:
            return state;
    }
};
  
export default reducer;