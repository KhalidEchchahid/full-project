import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Chip,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { FromPassword } from "./FromPassword";
const Profile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile")).user;

  const userInfo = {
    email: "johndoe@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "Student",
    semester: "Fall 2021",
    profileImage: "https://picsum.photos/200/300",
  };

  const togglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  return (
    <Box sx={{ minHeight: "100vh", py: 2, mt: 0.5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ backgroundColor: "#f0f0f0" }}>
            <Grid container alignItems="center" p={2}>
              <Grid item>
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={userInfo.profileImage}
                  alt="User profile picture"
                />
              </Grid>
              <Grid item sx={{ ml: 2 }}>
                <Typography variant="h4" sx={{ color: "#21295c" }}>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#7a7f9d" }}>
                  {user?.role}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Chip
            icon={<VpnKeyIcon />}
            label="UPDATE PASSWORD"
            onClick={togglePasswordForm}
            sx={{ ml: 1, mt: 1, backgroundColor: "#f0f0f0", color: "#21295c" }}
          />
          <Chip
            icon={<DynamicFeedIcon />}
            label="MY POSTS"
            onClick={togglePasswordForm}
            sx={{ ml: 1, mt: 1, backgroundColor: "#f0f0f0", color: "#21295c" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
  <Paper elevation={2} sx={{ p: 2, backgroundColor: "#f0f0f0" }}>
    <Typography variant="h4" gutterBottom sx={{ color: "#21295c" }}>
      Personal Information
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ color: "#7a7f9d" }}>
      <strong>First Name:</strong> {user?.firstName}
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ color: "#7a7f9d" }}>
      <strong>Last Name:</strong> {user?.lastName}
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ color: "#7a7f9d" }}>
      <strong>Email:</strong> {user?.email}
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ color: "#7a7f9d" }}>
      <strong>Semester:</strong> {user?.semester}
    </Typography>
  </Paper>
</Grid>


        <Grid item xs={12} md={6}>
          {showPasswordForm && <FromPassword />}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
