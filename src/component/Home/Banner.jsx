import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="hero h-96"
            style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/flat-lay-various-office-supplies-electronics-red-background_14117-693424.jpg?w=1060)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Gadget Shop</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to={"/products"} className="btn btn-primary">
                    <button  className="btn btn-primary">Buy Now </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;