import ProductCard from "../ProductCard";


const FeaturedProduct = () => {
    return (
        <div className=" mx-auto lg:flex justify-between gap-5 ">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    );
};

export default FeaturedProduct;