import { useEffect, useRef, useState } from 'react'
import './searchBar.css'
import loupe from '../images/loupe.svg'
import { filterWordChanged } from '../../actions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
    const input = useRef()
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(filterWordChanged(value))
    }, [value, dispatch])

    return (
        <form 
            className='searchBar'
            onSubmit={(event) => event.preventDefault()}
        >
            <input 
                type='text'
                ref = {input}
                onChange={() => setValue(input.current.value)}
                className='searchBar__input'
                placeholder='Поиск'
            >
            </input>
            <img
                alt='loupe'
                src={loupe}
                className='searchBar__loupe'
            ></img>
        </form>
    )
}

export default SearchBar
