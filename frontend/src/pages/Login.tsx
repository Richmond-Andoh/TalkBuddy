import {Box, Typography, Button}  from '@mui/material'
import CustomizedInput from '../components/shared/CustomizedInput'
import { AiOutlineLogin } from "react-icons/ai";
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';


const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing In", { id: "Login"})
      await auth?.login(email, password)
      toast.success("Signed in successful", {id: "Login"})
    } catch (error) {
      console.log(error)
      toast.error("Failed to Sign in", {id: "Login"})
    }    
  }
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
          <form action="" onSubmit={handleSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              height: "350px",
              boxShadow: "5px 5px 10px #000",
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
               
                <Button type='submit'  className='btn-login'
                sx=
                {{
                  px: 2, 
                  py: 1, 
                  mt: 3, 
                  bgcolor: "#00fffc", 
                  color: "white",
                  ":hover": {
                    bgcolor: "white",
                    color: "black"
                  }
                }}
                endIcon={<AiOutlineLogin />}

                > 
                  Login
                </Button>

             </Box>
          </form>
        </Box>
      </Box>
  )
}

export default Login
