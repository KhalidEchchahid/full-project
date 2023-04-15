import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {Card} from '@mui/material';
import {CardMedia} from '@mui/material';
import {CardContent} from '@mui/material';
import {Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: 360,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

const StyledGradient = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
}));

const AdjacentArticleCard = () => {
  return (
    <StyledCard>
      <StyledCardMedia image="https://picsum.photos/200/300" />
      <StyledGradient />
      <CardContent>
        <Typography variant="body2" sx={{ color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.3)' }}>
         %^&*I
        </Typography>
        <Typography variant="h4" align="center" sx={{ color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.3)' }}>
          ddfjndnf
        </Typography>
      </CardContent>
        <div sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      {true && (
        <IconButton
          className="arrow-btn"
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            backgroundColor: '#f06292',
            color: '#fff',
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      {true && (
        <IconButton
          className="arrow-btn"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: '#f06292',
            color: '#fff',
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      )}
    </StyledCard>
  );
};

export default AdjacentArticleCard;
