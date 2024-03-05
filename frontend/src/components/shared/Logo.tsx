import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "auto", gap: "16px"}}>
      <Link to={"/"}>
        <img src="openai.png" alt="openai logo" width={"35px"} height={"35px"}/>
      </Link>
      <Typography  variant="h4">

      </Typography>
    </div>
  )
}

export default Logo
