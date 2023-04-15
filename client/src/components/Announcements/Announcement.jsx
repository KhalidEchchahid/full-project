import React from "react";
import {CardActions, Card, CardHeader, CardContent, Typography, Divider, CardMedia , Button, Container} from "@mui/material";


const Announcement = ({ title, description, file, creator, image }) => {
    const handleDownload = () => {
        // Perform download logic here
        console.log(`Downloading ${file}...`);
      };
  return (
    <Container maxWidth="lg" >



    <Card sx={{
        marginBottom: 2,
        borderRadius: 2,
        color:'red',
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.4)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 1)",
        },
      }}
    >
      {image && <CardMedia component="img"  image={image} alt={title} />}
      <CardHeader title={title} subheader={`By ${creator}`} color="red" />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
        {file && (
          <>
            <Divider />
            <Typography variant="body2" color="textSecondary" component="p">
              File: {file}
            </Typography>
          </>
        )}
      </CardContent>
      {file && (
        <CardActions>
          <Button size="small" color="primary" onClick={handleDownload}>
            Download
          </Button>
        </CardActions>
      )}
    </Card>
    </Container>
  );
};
export default Announcement ;

