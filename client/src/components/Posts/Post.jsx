import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

const myStyle = {
  tags : {
    margin : '7px 15px' ,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '7px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '5px 16px 5px 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
}


const Post = () => {

  return (
    <Card style={myStyle.card}  elevation={6}>
      
      <CardMedia style={myStyle.media} image = {null} title={null}/>
      <div style={myStyle.overlay}>
        <Typography variant='h6'>name</Typography>
        <Typography variant='body2'>moment</Typography>
      </div>
      <div style={myStyle.overlay2}>
        <Button style={{color : 'white'}} size="small">
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <ButtonBase  component="span"  name="test" style={myStyle.cardAction}>
        <div>
         <Typography style={myStyle.tags} variant='body2' color="textSecondary">tags</Typography>
        </div>
         <Typography style={myStyle.title} variant='h5' gutterBottom>title</Typography>
         <CardContent style={myStyle.message}>
        <Typography  variant='body2' color="textSecondary" component='p' gutterBottom>message</Typography>
        </CardContent>
        </ButtonBase>
      <CardActions style={myStyle.cardActions}>
        <Button size='small'  color='primary' >
          likes
        </Button>
    <Button size='small' color='primary'>
      <DeleteIcon />
      Delete
    </Button>
      </CardActions>
    </Card>
  )
}

export default Post