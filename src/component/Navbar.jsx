import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
        // console.log("clicked")
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/Products" >Products</NavLink></li>
                        <li><NavLink to="/Contact" >Contact</NavLink></li>
                        <li><NavLink to="/AboutUs" >About Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/Products" >Products</NavLink></li>
                    <li><NavLink to="/Contact" >Contact</NavLink></li>
                    <li><NavLink to="/AboutUs"  >About Us</NavLink></li>


                </ul>
            </div>
            <div className="navbar-end gap-1 ">
                {
                    user ?



                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <div className="avatar">
                                    <div className=" w-9 rounded-full ">
                                        <img src={user?.photoURL ? user?.photoURL : '/public/rabbit.png'} />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><NavLink to='/dashboard/overview' >Dashboard</NavLink></li>
                                <li onClick={handleSignOut} className=" mt-1 btn btn-outline btn-sm " >Logout</li>

                            </ul>
                        </div>
                        :
                        <div>
                            <NavLink to='/Login' > <button className="btn btn-primary btn-outline " >Login</button> </NavLink>
                            <NavLink to="/Register"> <button className="btn btn-primary " >Register</button> </NavLink>
                        </div>
                }



            </div>
        </div>
    );
};

export default Navbar;