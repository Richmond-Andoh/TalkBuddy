import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "auto", gap: "16px"}}>
      <Link to={"/"}>
        <img src="openai.png" alt="openai logo" width={"35px"} height={"35px"} className="logo" />
      </Link>
      <Typography sx={{ 
            display: {md: "block", sm: "none", xs: "none"}, 
            mr: "auto", 
            fontWeight: "800", 
            textShadow: "2px 2px 20px #000",
            color: "white"
      }}>

        <span style={{fontSize: "20px"}}>TalkBuddy</span> -GPT

      </Typography>
    </div>
  )
}

export default Logo
