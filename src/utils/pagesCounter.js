const pagesCounter = (posts) => {
    return Math.ceil(posts.length / 10)
}

export default pagesCounter