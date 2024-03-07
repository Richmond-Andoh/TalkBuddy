import {Box, Typography, Button}  from '@mui/material'
import CustomizedInput from '../components/shared/CustomizedInput'

const Login = () => {
  return (
      <Box width={"100%"} height={"100%"} display="flex" flex={1}>
        <Box padding={8} alignItems={"center"} display={{md: "flex", sm: "none", xs: "none"}}>
          <img src="ai_robot.png" alt="ai robot" style={{width: "400px"}}/>
        </Box>

        <Box 
          display={"flex"} 
          flex={{xs: 1, md: 0.5}}
          justifyContent={"center"} 
          alignItems={"center"}
          padding={3}
          ml={"auto"}
          mt={16}
        >
          <form action="" 
            style={{
              margin: "auto",
              padding: "30px",
              height: "350px",
              boxShadow: "10px 10px 20px #000",
              borderRadius: "10px",
              border: "none"
            }}
          >
             <Box
               sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
               }}
             >
               <Typography variant="h4" textAlign={"center"} fontWeight={600}>
                  Login
                </Typography>

                <CustomizedInput name="email" label="Email" type="email" />
                <CustomizedInput name="password" label="Password" type="password" />
               
                <Button type='submit' 
                sx=
                {{
                  px: 2, 
                  py: 1, 
                  mt: 3, 
                  bgColor: "#00fffc", 
                  color: "black",
                  ":hover": {
                    bgcolor: "white",
                    color: "black"
                  }
              
                }}>Login</Button>

             </Box>
          </form>
        </Box>
      </Box>
  )
}

export default Login
