import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import store from './store'
import PostsApiService from './services'

import { Provider } from 'react-redux'
import { PostsApiServiceProvider } from './components/posts-api-service-context/posts-api-service-context'
import { filterPosts } from './utils'

const postsApiService = new PostsApiService()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = { store }>
      <ErrorBoundry>
        <PostsApiServiceProvider value = { {postsApiService, filterPosts} }>
          <App />
        </PostsApiServiceProvider>
      </ErrorBoundry>
    </Provider>
);