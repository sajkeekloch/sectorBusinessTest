import './table-body.css'

const TableBody = ({ posts }) => {
    const rows = posts.map((post) => {
        return (
            <tr  
                className='body__row'
                key={post.id}>
                <td 
                    className='cell textCenter'
                >
                    {post.id}
                </td>
                <td
                    className='cell'
                >
                    {post.title}
                </td>
                <td
                    className='cell'
                >
                    {post.body}
                </td>
            </tr>
        )
    })

    return (
        <tbody className='table__body'>
            { rows }
        </tbody>
    )
}

export default TableBody