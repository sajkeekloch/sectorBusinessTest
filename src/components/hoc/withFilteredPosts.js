import { PostsApiServiceConsumer } from "../posts-api-service-context"

const withFilteredPosts = () => (Wrapped) => {
    return (props) => {
        return <PostsApiServiceConsumer>
                { ({ filterPosts }) => {
                    return (<Wrapped 
                        {...props}
                        filterPosts = { filterPosts }
                    />)
                } }
            </ PostsApiServiceConsumer>
    }
}

export default withFilteredPosts