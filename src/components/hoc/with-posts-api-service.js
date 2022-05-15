import { PostsApiServiceConsumer } from "../posts-api-service-context"

const withPostsApiService = () => (Wrapped) => {
    return (props) => {
        return <PostsApiServiceConsumer>
                { ({ postsApiService }) => {
                    return (<Wrapped 
                        {...props}
                        postsApiService = { postsApiService }
                    />)
                } }
            </ PostsApiServiceConsumer>
    }
}

export default withPostsApiService