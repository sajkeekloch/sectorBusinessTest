import {
    sortById,
    sortByBody,
    sortByTitle,
} from './sortPosts'
import splitOnPages from './splitOnPages'
import store from '../store'

const filterPosts = () => {
    const { posts, filterWord, sortBy } = store.getState()
    const filteredTitles = posts.filter((post) => post.title.includes(filterWord))
    const filteredBodys = posts.filter((post) => post.body.includes(filterWord))

    if (sortBy.category === 'id') {
        return splitOnPages(sortById(filteredTitles, filteredBodys, sortBy.fromTop))
    }
    if (sortBy.category === 'title') {
        return splitOnPages(sortByTitle(filteredTitles, filteredBodys, sortBy.fromTop))
    }
    if (sortBy.category === 'body') {
        return splitOnPages(sortByBody(filteredTitles, filteredBodys, sortBy.fromTop))
    }
    return splitOnPages(posts)
}

store.subscribe(filterPosts)
export default filterPosts
