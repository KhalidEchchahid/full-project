import * as React from 'react';
import {AppBar , Box , Toolbar , IconButton , Typography , Menu , Container , Avatar , Button, Tooltip , MenuItem,  } from '@mui/material' ;
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {redirect , useNavigate , useLocation} from 'react-router-dom';
import decode from 'jwt-decode'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';




const  ResponsiveAppBar =() => {

  const [user , setUser] = React.useState(JSON.parse(window.localStorage.getItem('profile')));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  // const [isLoged , setIsLoged] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
  // console.log(user)

  const pages = user ? ['Home', 'Blog' ,'Posts','Announcements'] : ['Home'];
  const settings = ['Profile','Logout'];

  const logout = () =>{
    dispatch({type : 'LOGOUT'})
    navigate("/auth");
    setUser(null)
  }


  React.useEffect(()=>{
    const token = user?.token ;
    if(token){
      const decodeToken = decode(token);
      if(decodeToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(window.localStorage.getItem('profile')));
  },[location])
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if(page !== null){
      navigate(`/${page.toLowerCase()}`)
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if(setting !== null){
      if(setting.toLowerCase() === "logout") logout();
      else navigate(`/${setting.toLowerCase()}`);
    }
    setAnchorElUser(null);
  };

 const handClick =(page)=>{
  if(page !== null){
    navigate(`/${page.toLowerCase()}`)
  }
 }

  return (
    <AppBar position="static">
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex',color: '#21295C' }, mr: 1, color: "#FFD166" }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={()=>navigate('/home')}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 900,
          letterSpacing: '.3rem',
          color: '#21295C',
          textDecoration: 'none',
        }}
      >
        SMIF
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={()=>handleCloseNavMenu(null)}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
              <Typography textAlign="center" onClick={()=>handClick(page)}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none', color: '#21295C', }, mr: 1}} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 900,
          color: '#21295C',
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        SMIF
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={()=>handleCloseNavMenu(page)}
            sx={{ my: 2, color: '#f0f0f0', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
      {user ?   (<Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user?.user?.firstName} src={user?.user?.imgUrl}>{user.user.firstName.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={()=>handleCloseUserMenu(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                  <Typography textAlign="center" onClick={()=>handClick(setting)}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          ) :  (
          <Button  variant='contained' color='success'><Link to={`/auth`}>login</Link></Button>
          )}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;