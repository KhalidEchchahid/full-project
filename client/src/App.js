import React from "react";

import {  Container } from '@mui/material'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { Navigate } from "react-router-dom";
import Navbar from './components/Nav/Navbar.jsx'
import Auth from './components/Auth/Auth.jsx'
import Blog from "./components/Blog/Blog.jsx";
import Announcements from './components/Announcements/Announcement.jsx'
import Posts from "./components/Posts/Posts.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AddPost from './components/Posts/AddPost'

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/announcements" element={<Announcements/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/addPost" element={<AddPost/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
