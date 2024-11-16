import { FaCartPlus, FaOpencart } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { SiHomeadvisor } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";


export const Sidebar = () => {
    return (
        <div className="bg-gray-300 border-r-2 border-r-black min-h-screen p-5" >
            <h1 className="text-3xl font-bold mx-auto text-center my-7 " >Gadget Shop</h1>
            <div>
                <ul className="flex flex-col gap-3 pl-1 font-semibold" >
                    <li>
                        <NavLink to="/dashboard/overview" className="flex justify-center items-center gap-2 border-2 rounded-md border-black p-1 "
                             >
                            <GrOverview />
                            Overview</NavLink>
                    </li>
                    <li>
                        <Link to="/dashboard/my-product" className="flex justify-center items-center gap-2 border-2 rounded-md border-black p-1"

                        >
                            <FaOpencart />
                            My Product</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-product" className="flex justify-center items-center gap-2 border-2 rounded-md border-black p-1" >
                            <FaCartPlus />
                            Add Product</Link>
                    </li>
                    <li>
                        <Link to="/" className="flex justify-center items-center gap-2 border-2 rounded-md border-black p-1" >
                            <SiHomeadvisor />
                            Home</Link>
                    </li>
                    <buttton>Logout</buttton>
                </ul>
            </div>

        </div>
    )
}