import axios from "axios";

const API = axios.create({baseURL : 'http://localhost:8086/api/v1'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req ;
});

// for login .........
export const signIn = (formData) => API.post('/auth/authenticate', formData);
export const signUp = (formData) => API.post('/auth/register', formData);

// for blogs ...


























// for posts .......
export const fetchPost = (id) => API.get(`/studentPublications/${id}`);
export const fetchPosts = (page) => API.get(`/studentPublications?page=${page}`);
export const fetchPostsBySearch = ({search , tags}) => API.get(`/studentPublications/search?searchQuery=${search || 'none'}&tags=${tags}`);
export const deletePost = (id) => API.delete(`/studentPublications/${id}`) ;
export const createComment = (newComment , id) => API.post(`/studentPublications/comments/${id}` ,newComment);
export const deleteComment = (commentId , userId) => API.delete(`/studentPublications/comments/${commentId}?userId=${userId}`);
export const likePost = (publicationId , userId) => API.patch(`/studentPublications/${publicationId}/likes/${userId}`) ;
export const createPost = (newPost) => API.post('/studentPublications',newPost , {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

export const updatePost = (id , updatedPost) => API.put(`/studentPublications/${id}` , updatedPost, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });