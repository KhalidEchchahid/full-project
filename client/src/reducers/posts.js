import {FETCH_BY_SEARCH, DELETE_COMMENT, Add_COMMENT ,CREATE, DELETE, FETCH_ALL , LIKE, UPDATE , START_LOADING ,END_LOADING , FETCH_POST} from '../constants/actionType';

const postsReducer = (state = {isLoading : true , posts : []} , action ) => {
    switch(action.type){
        case START_LOADING : 
            return {...state , isLoading : true} 
        case END_LOADING : 
            return {...state , isLoading : false}
        case CREATE : 
             return {...state , posts : [action.payload , ...state.posts]};
        case FETCH_ALL : 
            return {
                ...state ,
                posts : action.data.body.studentPublications,
                currentPage : action.data.body.currentPage ,
                numberOfPages : action.data.body.totalPages
            };
        case FETCH_POST:
            return { ...state, post: action.payload.post };
        case UPDATE :
            return {...state , posts : state.posts.map((post) => post.id === action.payload.id ? action.payload : post )}
        case DELETE : 
            return {...state , posts : state.posts.filter((post) => post.id !== action.payload ) };
        case LIKE :  
            return {...state , posts : state.posts.map((post) => post.id === action.payload.id ? action.payload : post )}
        case Add_COMMENT :  
            return {...state , posts : state.posts.map((post) => post.id === action.payload.id ? action.payload : post )}
        case DELETE_COMMENT :  
            return {...state , posts : state.posts.map((post) => post.id === action.payload.id ? action.payload : post )}
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        default : 
            return state;
    }
}

export default postsReducer ;