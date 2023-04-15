import React from "react";
import Announcement from "./Announcement";
import {Divider , Box , Grid} from "@mui/material";
function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Welcome to the course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      file: null,
      creator: "Prof. John Doe",
      image: null
    },
    {
      id: 2,
      title: "Important announcement",
      description:
        "Suspendisse a eros mi. Suspendisse vulputate semper magna, ac gravida lacus hendrerit in.",
      file: "document.pdf",
      creator: "Prof. Jane Doe",
      image: null,
    },
    {
        id: 3,
        title: "Important announcement",
        description:
          "Suspendisse a eros mi. Suspendisse vulputate semper magna, ac gravida lacus hendrerit in.",
        file: "document.pdf",
        creator: "Prof. Jane Doe",
        image: null,
      },
      {
        id: 4,
        title: "Welcome to the course",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        file: null,
        creator: "Prof. John Doe",
        image: null
      },
  ];

  return (
    <Box sx={{ mt: 2, minHeight: "100vh" }}>
        <Grid container
          alignItems="stretch"
          spacing={3}>
      {announcements.map((announcement) => (
        
          <Grid item s={12} sm={12} md={12} lg={12}>
            <Announcement key={announcement.id} {...announcement} />
          </Grid>
       
      ))}
       </Grid>
    </Box>
  );
}

export default Announcements;
