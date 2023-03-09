import React , {useState , useEffect} from 'react'
import { Avatar , Button , Paper , Grid , Typography , Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import './style.css';

const myStyle = {
  
    paper: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      },
      avatar: {
        margin : '5px' , 
        backgroundColor : 'red' 
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '7px',
      },
    submit: {
      marginTop: '15px' ,
    },
    googleButton: {
        margin: '15px 0',
    },
} 

const initialeState = {
    firstName : '' ,
    lastName : '',
    email :'',
    password : '' ,
    confirmPassword : ''
}

const Auth = () => {
    const [isSignUp , setIsSignUp ] = useState(false) ; 
    const [showPassword , setShowPasswod] = useState(false) ;
    const navigate = useNavigate();
    const handleShowPassword = () => setShowPasswod((prev) => !prev) ;
    const [formData , setFormData] = useState(initialeState);



    const handelChange = (event) =>{
        setFormData({...formData , [event.target.name] : event.target.value})
    };


    const switchMode =()=>{
      setIsSignUp((prev)=> !prev) ;
      setShowPasswod(false)
    }


  return (
   
    <Container component='main' maxWidth='xs'>
        <Paper style={myStyle.paper} elevation={3}>
            <Avatar style={myStyle.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            {/* onSubmit={handelSubmit}   hna hadi ghadi dar fl form  */}
             <form  style={myStyle.form} > 
             
                <Grid container spacing={3}>
                    { isSignUp && (
                        <>
                        <Input name='firstName' label='First Name' handelChange={handelChange} autoFocus half />
                        <Input name='lastName' label='Last Name' handelChange={handelChange}  half />
                            
                        </>
                    )}
                    <Input name='email' label='Email Adress' handelChange={handelChange} type='email' />
                    <Input name='password' label='password' handelChange={handelChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    {isSignUp && <Input name="confirmPassword" label='Repeat Password' handelChange = {handelChange} type = 'password'/>}
                </Grid>
                <Button type="submit" fullWidth variant='contained' color="primary" style={myStyle.submit}>{isSignUp ?  'sign Up': 'Sign In'}</Button>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</Button>
                    </Grid>
                </Grid>
            </form>
            
        </Paper>
    </Container>
   
  )
}

export default Auth
