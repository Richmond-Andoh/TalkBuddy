import { Box, AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import { useAuth }  from "../context/AuthContext.js"
import NavLink from './shared/NavLink.js'

const Header = () => {

  const auth = useAuth();

  return (
    <Box>
        <AppBar sx={{postion: "static", backgroundColor: "transparent",  boxShadow: "none"}}>
        <Toolbar style={{ display: "flex"}}>
          <Logo />
          <div>
            {
              auth?.isLoggedIn ? 
              <>
                <NavLink to='/chat' bg='teal' text='Go to chat' textColor='white' />
                <NavLink to='/' bg='red' text='Logout' textColor='white' onClick={auth.logout}/>
              </>
              :
              <>
                <NavLink to='/Login' bg='teal' text='Login' textColor='white' />
                <NavLink to='/register' bg='blue' text='Register' textColor='white' />
              </>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
