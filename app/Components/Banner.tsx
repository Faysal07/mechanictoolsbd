// Static Image Link Here
import BannerImageOne from "../../public/images/BannerImageOne.jpg";
import BannerImageTwo from "../../public/images/BannerImageTwo.jpg";

export default function Banner() {
    return(
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={BannerImageOne} className="w-full md:h-full md:max-h-[500px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={BannerImageTwo} className="w-full md:h-full md:max-h-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={BannerImageOne} className="w-full md:h-full md:max-h-[500px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={BannerImageTwo} className="w-full md:h-full md:max-h-[500px]" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
}