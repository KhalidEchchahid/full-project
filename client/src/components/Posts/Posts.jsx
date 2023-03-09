import React from 'react'
import Post from './Post'
import { Grid , CircularProgress} from '@mui/material'
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import {Link} from 'react-router-dom';
import { Box } from '@mui/system';

const myStyle = {
    add:{
        marginTop : '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        width : '90%',
    },
  mainContainer: {
    marginTop : '20px',
    display: 'flex',
    justifyContent: "space-between",
  },
  smMargin: {
    margin: '2px',
  },
  actionDiv: {
    textAlign: 'center',
  },
}

const Posts = () => {
   
 
  return (
    <Box>
        <Box style = {myStyle.add} >
            <PostAddSharpIcon  color='primary' fontSize='large'  />
        </Box>
        <Grid style = {myStyle.mainContainer} container alignItems="stretch" spacing={3}>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
            <Grid key={null} item  xs={6} sm={6} md={4} lg={3}>
                <Post/>
            </Grid>
        </Grid>
    </Box>
    
  )
}

export default Posts