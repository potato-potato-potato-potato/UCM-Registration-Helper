import { useNavigate } from "react-router-dom";
import './Navbar.css';

function LogoButton(){
    
    const navigate = useNavigate()

    function Gottohome(){
        
        navigate("/")
    }

    return(
         <img src="/logo.png" id="logo" alt="logo" onClick={Gottohome} />
    )

}

export default LogoButton; 
