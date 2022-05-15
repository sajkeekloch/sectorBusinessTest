import { useSelector } from 'react-redux'
import './spinner.css'

const Spinner = () => {
    const { loading } = useSelector(state => state)
    const className = loading? "lds-ring" : "lds-ring-disabled"
    return (
        <>
            <div className={className}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
        
    )
}

export default Spinner