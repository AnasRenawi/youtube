import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate ('/home')
    }

    return (<Box sx={{width:'100%',marginTop:'40px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <h1>Welcome To the App</h1>
        <Button onClick={handleClick} variant="contained" sx={{marginTop: '40px'}}>Enter</Button>
    </Box>)
}

export default Login;