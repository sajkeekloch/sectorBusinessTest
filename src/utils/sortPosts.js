const sortById = (arr1, arr2, fromTop = true) => {
    return fromTop?
        [...new Set([...arr1, ...arr2])].sort((a,b) => a.id - b.id)
            :
        [...new Set([...arr1, ...arr2])].sort((a,b) => b.id - a.id)
}

const sortByBody = (arr1, arr2, fromTop = true) => {
    return  fromTop?
        [...new Set([...arr1, ...arr2])].sort((a, b) =>  a.body > b.body? 1 : -1)
            :
        [...new Set([...arr1, ...arr2])].sort((a, b) =>  b.body > a.body? 1 : -1)
}

const sortByTitle = (arr1, arr2, fromTop = true) => {
    return fromTop?
        [...new Set([...arr1, ...arr2])].sort((a, b) => {
            return a.title > b.title? 1 : -1
        } )
            :
        [...new Set([...arr1, ...arr2])].sort((a, b) =>  b.title > a.title? 1 : -1)
}

export {
    sortById,
    sortByBody,
    sortByTitle
}