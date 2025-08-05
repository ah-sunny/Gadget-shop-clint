import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../component/loading/Loading";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";


const SellerRoute = ({children}) => {

const {user, loading} = useAuth();
const location = useLocation()
const userData = useUserData()

if(loading || !userData.role ){
    return <Loading/>
}
if(user && userData.role === 'seller'){
    return children;
}

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};
SellerRoute.propTypes = {
    children: PropTypes.node
}

export default SellerRoute;



// Admin eamil : admin@gmail.com
// Admin pass : Admin123$
// Buyer eamil : buyer@gmail.com
// Buyer pass : Buyer123$
// Seler eamil : seller@gmail.com
// Seler pass : Seller123$