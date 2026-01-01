//Icon Link Here
import ComputerIcon from "../../public/images/computerIcon.png";

import { useEffect, useState } from "react";
import { data } from "react-router";

//Assign Type whren using Typescript
type MicroscopeProduct = {
    productID: number;
    productImage: string;
    productTitle: string;
    productDescription: string;
    productAvailable: number;
    productCatagories: string;
    productPrice: number;
    SKU: number;
};


export default function Microscope(){
    // Mapping for Casual Shoe
    const [MicroscopeProducts, setMicroscopeProducts] = useState<MicroscopeProduct[]>([]);

    // Use Effect for Casual Shoe
    useEffect(() => {
        fetch("../../public/json/Microscope.json")
        .then(res => res.json())
        .then(data => setMicroscopeProducts(data))
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="py-[50px] bg-[#dbdfdf]">
            <div className="container md:max-w-[1370px] m-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:mb-[30px]">
                    <div className="title content-center">
                        <h2 className="text-[26px] font-bold">Microscope Products</h2>
                        <p className="text-[14px]">Explore our trending collections</p>
                    </div>
                    <div className="buttonTag text-right">
                        <a href="#" className="btn bg-[#4fa44b] text-[#ffffff]">All Categories</a>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">

                    {

                    MicroscopeProducts.map((Product, i) =>

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
            </div>
        </div>
    );
}