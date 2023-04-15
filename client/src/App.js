import React from "react";

import {  Container } from '@mui/material'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { Navigate } from "react-router-dom";
import Navbar from './components/Nav/Navbar.jsx'
import Auth from './components/Auth/Auth.jsx'
import Blog from "./components/Blog/Blog.jsx";
import Announcements from './components/Announcements/Announcements.jsx'
import Posts from "./components/Posts/Posts.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PostDetailes from "./components/Posts/PostDetailes.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AddArticle from "./components/Blog/AddArticle.jsx";

function App() {
  

  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user)

  return (
    <BrowserRouter>
        <Navbar />
        <Container maxWidth="xl" >
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/blog" element={ <Blog/>} />
          <Route path="/blog/addArticle" element={ <AddArticle/>} />
          <Route path="/announcements" element={ <Announcements/>} />
          <Route path="/posts" element={ <Posts/>} />
          <Route path='/posts/search'  element={<Posts/>} />
          <Route path="/posts/:id" element={<PostDetailes/>} />
          <Route path="/profile" element={ <Profile/>} />
          <Route path='/auth' element={ !user ? <Auth/> : <Navigate replace to="/home" />} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
