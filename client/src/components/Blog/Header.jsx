import React from "react";
import { TextField, Box, Container, Button, Chip } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PostAddSharpIcon from "@mui/icons-material/PostAddSharp";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    
    <Container>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "400px",
            padding: "10px 0",
          }}
        >
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
            fullWidth
          />
          <Box mt={2}>
            <Button>
              <SearchOutlinedIcon />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            height: "35px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF1493", color: "#fff" }}
          >
            <Link to={`/blog/addArticle`}>
            <span>Add new</span>
            </Link>
          </Button>
        </Box>
      </Box>
      
    </Container>
    <Box  pt={3}>
          <Chip
            label="UPDATE PASSWORD"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
          onClick={()=>{}}
          />
        
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
        <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          <Chip
            label="MY POSTS"
            sx={{ ml: 1, mt: 1, backgroundColor: "#FF69B4", color: "#fff" }}
            onClick={()=>{}}
          />
          
      </Box>
    </>
  );
};

export default Header;
