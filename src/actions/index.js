const postsRequested = () => {
    return {
        type: 'FETCH_POSTS_REQEST'
    }
}

const postsLoaded = (newPosts) => {
    return {
        type: 'FETCH_POSTS_SUCCES',
        payload: newPosts
    }
}

const postsError = (err) => {
    return {
        type: 'FETCH_POSTS_FAILURE',
        payload: err
    }
}

const filterWordChanged = (filterWord) => {
    return {
        type: 'FILTER_WORD_CHANGE',
        payload: filterWord
    }
}

const pageChanged = (page) => {
    return {
        type: 'CURRENT_PAGE_CHANGE',
        payload: page
    }
}

const sortingChange = (sortBy) => {
    return {
        type: 'SORTING_CHANGE',
        payload: sortBy
    }
}

const filter = (arr) => {
    return {
        type: 'FILTER',
        payload: arr
    }
}

const fetchPosts = (postsApiService) => (dispatch) => {
    dispatch(postsRequested())
    return postsApiService.getPosts()
        .then((data) => dispatch(postsLoaded(data)))
        .catch((err) => dispatch(postsError(err)))
}



export {postsRequested, postsLoaded, postsError, filterWordChanged, pageChanged, fetchPosts, sortingChange, filter }