//Icon Link Here
import ComputerIcon from "../../public/images/computerIcon.png";

import { useEffect, useState } from "react";
import { data } from "react-router";

//Assign Type whren using Typescript
type PopularProduct = {
    productID: number;
    productImage: string;
    productTitle: string;
    productDescription: string;
    productAvailable: number;
    productCatagories: string;
};


export default function PopularCatagories(){
    // Mapping for Casual Shoe
    const [PopularProducts, setPopularProducts] = useState<PopularProduct[]>([]);

    // Use Effect for Casual Shoe
    useEffect(() => {
        fetch("../../public/json/PopularProducts.json")
        .then(res => res.json())
        .then(data => setPopularProducts(data))
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="py-[100px] bg-[#dbdfdf]">
            <div className="container md:max-w-[1370px] m-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="title content-center">
                        <h2 className="text-[26px] font-bold">Popular Categories</h2>
                        <p className="text-[14px]">Explore our trending collections</p>
                    </div>
                    <div className="buttonTag text-right">
                        <a href="#" className="btn bg-[#4fa44b] text-[#ffffff]">All Categories</a>
                    </div>
                </div>
                <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-5">

                    {

                    PopularProducts.map((Product, i) =>

                    <div className="shadow-md pt-[40px] pr-[20px] pb-[40px] pl-[20px] text-center mt-[40px] mb-[40px] bg-[#ffffff] hover:bg-[#4fa44b]">
                        <a href="#" className="">
                            <img src={Product.productImage} alt="" className="md:w-[100px] md:h--[100px] shadow-md md:p-[10px] mb-[12px] m-auto bg-[#ffffff]" />
                            <h5 className="pb-[4px] font-bold text-[17px]">{Product.productTitle}</h5>
                            <p className="text-[15px]">{Product.productAvailable} Products</p>
                        </a>
                    </div>

                    )

                    }
                </div>
            </div>
        </div>
    );
}