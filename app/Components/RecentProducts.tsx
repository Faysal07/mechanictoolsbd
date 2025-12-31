//Json Link Up
import { useEffect, useState } from "react";

export default function RecentProducts() {
    // Mapping for Casual Shoe
    const [RecentProducts, setRecentProducts] = useState([]);
    
    // Use Effect for Casual Shoe
    useEffect(() => {
        fetch("../../public/json/RecentProducts.json")
        .then(res => res.json())
        .then(data => setRecentProducts(data))
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="pb-[100px] bg-[#dbdfdf]">
            <div className="container md:max-w-[1370px] m-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:mb-[30px]">
                    <div className="title content-center">
                        <h2 className="text-[26px] font-bold">Recent <span className="text-[#4fa44b]">Products</span></h2>
                        <p className="text-[14px]">Explore our trending collections</p>
                    </div>
                    <div className="buttonTag text-right sm:hidden md:block">
                        <a href="#" className="btn bg-[#4fa44b] text-[#ffffff]">All Categories</a>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">

                    {

                    RecentProducts.map((Product, i) =>

                    <div className="card bg-base-100 shadow-sm sm:px-[20px]">
                        <figure className="px-10 pt-10">
                            <img src={Product.productImage} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{Product.productTitle}</h2>
                            <p>{Product.productDescription}</p>
                            <p className="font-bold">SKU: <span className="font-regular">{Product.SKU}</span></p>
                            <p className="font-bold">Available Products: <span className="font-regular">{Product.productAvailable}</span></p>
                            <h6 className="font-bold">Product Price: <span className="font-regular">{Product.productPrice}</span></h6>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    )

                    }
                </div>
                <div className="grid sm:grid-cols-1 sm:block md:hidden pt-[20px] px-[30px]">
                    <a href="#" className="btn bg-[#4fa44b] text-[#ffffff]">Show Recent Products</a>
                </div>
            </div>
        </div>
    );
}