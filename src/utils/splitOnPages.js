const splitOnPages = (posts) => {
    const res = []
    for (let i = 0; i < posts.length; i += 10) { 
        const chunk = posts.slice(i, i + 10); 
        res.push(chunk); 
    } 
    return res
}

export default splitOnPages