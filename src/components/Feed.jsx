import Groups from '@mui/icons-material/Groups'
import Home from '@mui/icons-material/Home'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import Post from './Post';

const Feed = () => {
  return (
    <Box flex={4}  p={2}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    
    </Box>
  )
}

export default Feed