import Banner from "../component/Home/Banner";
import FAQ from "../component/Home/FAQ";
import FeaturedProduct from "../component/Home/FeaturedProduct";
import UserInfo from "../component/Home/UserInfo";

const Home = () => {
    return (
        <div>
            <Banner />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured Product Section */}
                <section className="my-20">
                    <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">Featured Products</h1>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Discover our handpicked selection of the latest and most popular gadgets in the market.</p>
                  <FeaturedProduct />
                </section>

                {/* Why Choose Us Section */}
                <section className="my-20 py-16 bg-gray-50 rounded-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Products</h3>
                            <p className="text-gray-600">We offer a curated selection of high-quality gadgets from trusted brands to ensure you get the best performance and reliability.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h3>
                            <p className="text-gray-600">We provide fast and reliable shipping to get your new gadgets to you as quickly as possible, wherever you are.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellent Support</h3>
                            <p className="text-gray-600">Our dedicated support team is here to help you with any questions or issues, ensuring a smooth and satisfying shopping experience.</p>
                        </div>
                    </div>
                </section>

                <UserInfo />

                {/* Our Brands Section */}
                {/* <section className="my-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Brands</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <img src="../../public/Brand.png" alt="Brand A" className="h-12 rounded-md" />
                        <img src="../../public/Brand.png" alt="Brand A" className="h-12 rounded-md" />
                        <img src="../../public/Brand.png" alt="Brand A" className="h-12 rounded-md" />
                        
                    </div>
                </section> */}

                <div className="my-14 w-full lg:w-3/4 mx-auto">
                    <FAQ />
                </div>
            </div>
        </div>
    );
};

export default Home;
