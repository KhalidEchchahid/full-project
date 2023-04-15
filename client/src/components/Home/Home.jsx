import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Grid,
} from "@mui/material";

import Carousel from "react-material-ui-carousel";

const Home = () => {
    const images = [
        "https://source.unsplash.com/random/1000x600?programming",
        "https://source.unsplash.com/random/1000x600?programming",
        "https://source.unsplash.com/random/1000x600?programming",
      ];
  return (
    <Box sx={{ minHeight: "100vh" }}>
      
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            marginTop: "-17.5px",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <Typography variant="h2" align="center" fontWeight="bold" sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              Welcome to My University
            </Typography>
          </Box>
        ))}
      </Carousel>

      {/* Description section */}
      <Box sx={{ px: 2, py: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          fermentum lorem. Morbi semper ullamcorper ipsum, a tincidunt enim
          cursus eget.
        </Typography>
        <Typography variant="body1" paragraph>
          Nam id justo tellus. Duis congue euismod sagittis. Donec ut nisl vel
          nisi consequat euismod sed vel arcu.
        </Typography>
      </Box>

      {/* Cards section */}
      <Box sx={{ px: 2, pb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Programs
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://source.unsplash.com/random/400x300?programming"
                alt="Programming"
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Computer Science
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://source.unsplash.com/random/400x300?chemistry"
                alt="Chemistry"
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Chemistry
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://source.unsplash.com/random/400x300?business"
                alt="Business"
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Business
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Home;
