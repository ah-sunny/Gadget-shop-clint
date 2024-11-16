import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const BuyerRoute = ({children}) => {
    // const { user, loading } = useAuth()
    // const [userData] = useUserData()
    const location = useLocation();
  
   

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};
BuyerRoute.propTypes = {
    children: PropTypes.node
}


export default BuyerRoute;