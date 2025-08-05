import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogIn } from "../component/GoogleLogIn";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";

const LogIn = () => {
    const { LogInUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
        LogInUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                toast.success("User logged in successfully");
                navigate('/');
            })
            .catch(error => {
                toast.error(`${error.message}`);
            });
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/login.jpg')" }}
        >
            <motion.div 
                className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                    <div className="relative">
                        <input 
                            {...register("email", { required: true })} 
                            type="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-white bg-opacity-90"
                        />
                        {errors.email && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Email is required</span>}
                    </div>
                    <div className="relative">
                        <input 
                            {...register("password", { required: true, minLength: 6 })} 
                            type="password" 
                            placeholder="Password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-white bg-opacity-90"
                        />
                        {errors.password?.type === "required" && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Password is required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Password must be at least 6 characters</span>}
                    </div>
                    
                    <motion.button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.button>
                    
                    <div className="text-center">
                        <GoogleLogIn />
                    </div>

                    <p className="text-sm text-center text-gray-700">
                        New here? 
                        <Link to='/Register' className="text-blue-600 hover:underline ml-1">Create an account</Link>
                    </p>
                </form>
            </motion.div>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default LogIn;