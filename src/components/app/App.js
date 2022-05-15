import Spinner from '../spinner'
import SearchBar from '../searchBar'
import TableContainer from "../table"
import Error from '../error'

import './App.css'
import withPostsApiService from '../hoc/with-posts-api-service'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../../actions'

function App({ postsApiService }) {
  const { loading, error } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchPosts(postsApiService))
  }, [dispatch, postsApiService])

  return (
    <div className="App">
      <SearchBar />
      {
        loading? <Spinner /> 
          : error? <Error /> 
            : <TableContainer /> 
      }
    </div>
  );
}

export default withPostsApiService()(App)