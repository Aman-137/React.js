import React from 'react'
import Practice from './components/Practice'
import FetchApi from './components/FetchApi'
import DataFetching from './components/DataFetching'
import DataPost from './components/DataPost'

const App = () => {
  return (
    <div>
      <Practice />
      {/* <FetchApi /> */}
      <DataFetching />
      <DataPost />
    </div>
  )
}

export default App
