import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

export const GoogleLogIn = () => {
    const {GoogleLogin} = useAuth();
    const navigate = useNavigate()
const handleGoogleLogin=()=>{
    GoogleLogin()
    
    .then((result)=>{
        console.log(result.user)
        toast.success("user log in succesfully")
        navigate('/')
    })
       .catch(error => {
           // console.error(error)
           toast.error(`${error.message}`)
       })
}

  return (
    <div className="">
        <div className="divider my-2">OR</div>
        <div onClick={handleGoogleLogin} className="flex items-center gap-2 btn btn-outline btn-sm text-lg " >
            <FcGoogle/> <span>GOOGLE</span>
        </div>
        <ToastContainer></ToastContainer>
    </div>

   
  )
}
