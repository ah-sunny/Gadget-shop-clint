import Banner from "../component/Home/Banner";
import FeaturedProduct from "../component/Home/FeaturedProduct";
import UserInfo from "../component/Home/UserInfo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto " >
                <div className="my-14" >
                    <h1 className="mb-8 text-2xl font-serif text-center">Featured Product</h1>
                    <FeaturedProduct></FeaturedProduct>
                </div>
                <UserInfo></UserInfo>
            </div>

        </div>
    );
};

export default Home;