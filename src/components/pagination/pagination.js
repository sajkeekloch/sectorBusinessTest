import './pagination.css'
import { pageChanged } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = ({ pagesCount }) => {
    const { currentPage } = useSelector(state => state)
    const dispatch = useDispatch()
    const handleClick = (el) => {
        dispatch(pageChanged(el))
    }
    const scroll = (num) => {
        dispatch(pageChanged(currentPage + num))
    }
    const arr = [...Array(pagesCount).keys()]

    return (
        <div className='pagination'>
            <button
                disabled = {currentPage === 0}
                onClick={() => scroll(-1)}
            >
                Назад
            </button>
            <ul className='pagination__nums'>
                {
                    arr.map(el => {
                        return (
                            <li 
                                key={el}
                                onClick={() => handleClick(el)}
                                className={el === currentPage? 'current':''}
                            >
                                {el + 1}
                            </li>  
                        )
                    })
                }
            </ul>
            <button
                disabled = {currentPage === pagesCount - 1 || pagesCount === 0}
                onClick={() => scroll(1)}
            >
                Далее
            </button>
        </div>
    )
}

export default Pagination