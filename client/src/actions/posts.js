import {FETCH_BY_SEARCH, DELETE_COMMENT , Add_COMMENT ,CREATE, DELETE, FETCH_ALL , LIKE, UPDATE , START_LOADING ,END_LOADING , FETCH_POST} from '../constants/actionType';
import * as api from '../api/index' ;

export const createPost = (postData) => async (dispatch)=> {
    try{
     
      dispatch({type : START_LOADING })
        const {data} = await api.createPost(postData);
        dispatch({
            type : CREATE,
            payload : data 
        })
        dispatch({type : END_LOADING })

    }catch(err){
        console.log(err.message)
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
      dispatch({type : START_LOADING })
      console.log(page)
      const  {data}  = await api.fetchPosts(page);
      dispatch({ type: FETCH_ALL, data });
      dispatch({type : END_LOADING })

    } catch (error) {
      console.log(error);
    }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    console.log(data);
    dispatch({ type: FETCH_POST, payload: { post: data } });
    dispatch({type : END_LOADING })
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = ({search , tags}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data}  = await api.fetchPostsBySearch({search , tags});
    console.log(data)
    dispatch({ type: FETCH_BY_SEARCH, payload: data  });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id , postData) => async (dispatch) =>{
  try{
    const {data} = await api.updatePost(id , postData)
    dispatch({type : UPDATE , payload : data})
  }catch(err){
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) =>{
  try{
    await api.deletePost(id) ;
    dispatch({type: DELETE , payload : id})
  }catch(err){
    console.log(err) ;
  }
}

export const likePost = (postId , userId) => async (dispatch) => {
  try{
      const {data} = await api.likePost(postId ,userId )
      console.log(data)
      dispatch({type : LIKE , payload: data})
  }catch(err){
    console.log(err)
  }
}

export const addComment = (comment , id) => async (dispatch) => {
  try{
      const {data} = await api.createComment(comment ,id)
      console.log(data)
      dispatch({type : Add_COMMENT , payload: data})
  }catch(err){
    console.log(err)
  }
}

export const deleteComment = (commentId , userId) => async (dispatch) => {
  try{
      const {data} = await api.deleteComment(commentId ,userId)
      dispatch({type : Add_COMMENT , payload: data})
  }catch(err){
    console.log(err)
  }
}

