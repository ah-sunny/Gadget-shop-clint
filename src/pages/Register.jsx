import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { GoogleLogIn } from "../component/GoogleLogIn";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";

const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const handleRegister = (data) => {
        const name = data.email.split("@")[0];
        const userDetails = {
            name: name,
            email: data.email,
            photoURL: data.photoURL,
            role: data?.role,
            status: data.role === "buyer" ? "approved" : "pending",
            wishlist: []
        };

        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                axios.post('https://gadget-shop-server-ebon.vercel.app/users', userDetails)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate("/");
                        }
                    })
                    .catch(error => {
                        toast.error(`${error.message}`);
                    });
            })
            .catch(error => {
                toast.error(`${error.message}`);
            });
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/Register.jpg')" }}
        >
            <motion.div 
                className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                    <div className="relative">
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow bg-white bg-opacity-90" />
                        {errors.email && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Email is required</span>}
                    </div>
                    <div className="relative">
                        <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow bg-white bg-opacity-90" />
                        {errors.password?.type === "required" && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Password is required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Password must be at least 6 characters</span>}
                    </div>
                    <div className="relative">
                        <input {...register("confirmPass", { required: true, validate: (value) => watch("password") === value || "Passwords do not match" })} type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow bg-white bg-opacity-90" />
                        {errors.confirmPass && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.confirmPass.message}</span>}
                    </div>
                    <div className="relative">
                        <select {...register("role", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow bg-white bg-opacity-90">
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.role && <span className="text-red-500 text-xs absolute -bottom-5 left-0">You must select a role</span>}
                    </div>
                    
                    <motion.button 
                        type="submit" 
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register
                    </motion.button>

                    <div className="text-center">
                        <GoogleLogIn />
                    </div>

                    <p className="text-sm text-center text-gray-700">
                        Already have an account? 
                        <Link to='/login' className="text-purple-600 hover:underline ml-1">Login here</Link>
                    </p>
                </form>
            </motion.div>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Register;
