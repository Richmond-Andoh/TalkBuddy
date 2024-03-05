import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
const Header = () => {
  return (
    <AppBar sx={{postion: "static", backgroundColor: "transparent",  boxShadow: "none"}}>
        <Toolbar style={{ display: "flex"}}>
          <Logo />
        </Toolbar>
    </AppBar>
  )
}

export default Header
