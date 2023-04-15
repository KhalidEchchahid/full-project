import {AUTH , CURRENT_USER_DETAILS} from '../constants/actionType' 
import {getCurrentUserDetails} from './user'
import * as api from '../api/index' ;
export const signin = (formData , navigate) => async (dispatch) => {
    try{

        const {data} = await api.signIn(formData);
        dispatch({type : AUTH , data});
        navigate('/home');
    }catch(err){
        console.log(err);
    }
}

export const signup = (formData , navigate) => async (dispatch) => {
    try{
        const {data} = await api.signUp(formData);
        dispatch({type : AUTH , data});
        navigate('/home');
    }catch(err){
        console.log(err);
    }
}