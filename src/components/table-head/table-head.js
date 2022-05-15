import './table-head.css'

const TableHead = ({ category, fromTop, handleHeader }) => {
    const handleClick = (event) => handleHeader(event.target.id)
    const writeClass = (className) => {
        return 'row__item ' + className + ' ' +
            (category === className?
                fromTop? 'sorting fromTop '
                : 'sorting fromBottom'
            :
            'notSorting')
    }
    return (
        <thead className='table__head'>
            <tr className='head__row'>
                <th 
                    id="id"
                    className={ writeClass('id') }
                    onClick={ (e) => handleClick(e) }
                >
                    ID
                </th>
                <th 
                    id="title"
                    className={ writeClass('title') }
                    onClick={ (e) => handleClick(e) }
                >
                    Заголовок
                </th>
                <th
                    id="body"
                    className={ writeClass('body') }
                    onClick={ (e) => handleClick(e) }
                >
                    Описание
                </th>
            </tr>
        </thead>
    )
}

export default TableHead