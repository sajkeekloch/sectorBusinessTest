import React from "react"

const {
    Provider: PostsApiServiceProvider,
    Consumer: PostsApiServiceConsumer
} = React.createContext()

export { PostsApiServiceProvider, PostsApiServiceConsumer }