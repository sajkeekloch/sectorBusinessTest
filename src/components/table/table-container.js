import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import NotFound from '../not-found'
import TableHead from '../table-head'
import TableBody from '../table-body'
import Pagination from '../pagination'
import withFilteredData from '../hoc/withFilteredPosts'
import { sortingChange } from '../../actions'

const TableContainer = ({ filterPosts }) => {
    const { posts, filterWord, sortBy, currentPage } = useSelector(state => state)
    const [postsTorender, setPostsToRender] = useState([])
    const [pagesCount, setPagesCount] = useState()
    const dispatch = useDispatch()
    const handleHeader = (id) => {
        dispatch(sortingChange({
            category: id
        }))
    }

    useEffect(() => {
        const fullList = filterPosts()
        const shortList = fullList[currentPage]
        setPagesCount(fullList.length)
        setPostsToRender(shortList)
    }, [posts, filterWord, sortBy, currentPage, filterPosts])

    return (
        <>  
            {
                postsTorender? 
                    <table className="table">
                        <TableHead 
                            category = { sortBy.category }
                            fromTop = { sortBy.fromTop }
                            handleHeader = { handleHeader }
                        />
                        <TableBody 
                            posts = { postsTorender }
                        />
                    </table>
                        : <NotFound />
            }
            <Pagination 
                pagesCount = { pagesCount }
            />
        </>
    )     
}
  
export default withFilteredData()(TableContainer)

  