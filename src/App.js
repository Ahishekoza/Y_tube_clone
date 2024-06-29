import { Box } from '@mui/material'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import ChannelDetails from './components/ChannelDetails'
import VideoDetail from './components/VideoDetail'
import SearchDetail from './components/SearchDetail'

const App = () => {
  return (
    <div>
      <Box sx={{background:'black'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/channel/:id" exact element={<ChannelDetails/>}/>
        <Route path='/video/:id' exact element={<VideoDetail/>} />
        <Route path='/search/:searchTerm' exact element={<SearchDetail/>}/>
      </Routes>
      </Box>
    </div>
  )
}

export default App