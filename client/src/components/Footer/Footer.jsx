import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f8f8f8', py: 4 , mt: 2}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Formations
            </Typography>
            <ul>
              <li><Link href="#">Systèle LMD</Link></li>
              <li><Link href="#">Licence</Link></li>
              <li><Link href="#">Master</Link></li>
              <li><Link href="#">Doctorat</Link></li>
              <li><Link href="#">Formations Continues</Link></li>
              <li><Link href="#">Ressources</Link></li>
              <li><Link href="#">E-Learning</Link></li>
              <li><Link href="#">CED</Link></li>
              <li><Link href="#">Présentation</Link></li>
              <li><Link href="#">Architecture CED</Link></li>
              {/* <li><Link href="#">Formations Doctorales</Link></li>
              <li><Link href="#">Formations Complementaires</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Actualité CED</Link></li>
              <li><Link href="#">Contact</Link></li> */}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Recherche
            </Typography>
            <ul>
              <li><Link href="#">Présentation</Link></li>
              <li><Link href="#">Laboratoires</Link></li>
              <li><Link href="#">Equipes</Link></li>
              <li><Link href="#">Projets</Link></li>
              <li><Link href="#">Production Scientifique</Link></li>
              <li><Link href="#">Manifestations</Link></li>
              <li><Link href="#">Thèses</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              LA PAGE FACEBOOK OFFICIELLE
            </Typography>
            <Typography variant="body1">
              Suivez-nous sur Facebook pour les dernières nouvelles et mises à jour.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" variant="body2">Voir sur Facebook</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
