import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { data } from './Portfoliodata'
import Food1 from "../img/foodimg1.avif";
import Food2 from "../img/foodimg2.avif";
import Food3 from "../img/foodimg3.avif";
import Food4 from "../img/foodimg4.avif";
import Food5 from "../img/foodimg5.avif";




const Editorial = () => {
    let location = useLocation();
    let path = location.pathname.split('/')[2];


    const currentData = data.find(v => v.id == path);
    console.log(currentData)

    return (
        <>
            {/* navbar  */}
            <Navbar />
            {path == 1 || path == 3 ? (<>
                <div className='logo text-[60px] text-center pt-[100px] pb-[50px]'>EDITORIAL</div>
                <div className="px-[2%]">
                    <div className="sm:grid grid-cols-2 gap-2 p-6 ">
                        {/* Left Side */}
                        <div className="grid grid-cols-2 grid-rows-1 gap-2">
                            {/* Top Left */}
                            <div className=" overflow-hidden">
                                <img
                                    src={currentData.p1}
                                    alt="Dessert"
                                    className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-120"
                                />
                            </div>
                            {/* Top Right */}
                            <div className="  overflow-hidden">
                                <img
                                    src={currentData.p2}
                                    alt="Ice Cream"
                                    className="w-full object-cover transform transition-transform duration-1000 hover:scale-120"
                                />
                            </div>
                            {/* Bottom Left (span 2 columns) */}
                            <div className="col-span-2 sm:pb-[0px] pb-[10px] overflow-hidden">
                                <img
                                    src={currentData.p3}
                                    alt="Fruits"
                                    className="w-full object-cover transform transition-transform duration-1000 hover:scale-120"
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="overflow-hidden">
                            <img
                                src={currentData.p4}
                                alt="Cake with Pear"
                                className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-120"
                            />
                        </div>
                    </div>
                </div>
            </>) :

                (<>
                    <div className='logo text-[60px] text-center pt-[100px] pb-[50px]'>FOOD & SERVE</div>
                    <div className="px-[2%]">
                        <div className="grid grid-cols-3 gap-2 my-5">
                            {/* Left section (top row with two images) */}
                            <div className="col-span-2 flex flex-col gap-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <img
                                        src={Food1}
                                        alt="food1"
                                        className="col-span-2 h-full w-full object-cover"
                                    />
                                    <img
                                        src={Food2}
                                        alt="food2"
                                        className="col-span-1 h-full w-full object-cover"
                                    />
                                </div>

                                {/* Second row left image */}
                                <img
                                    src={Food3}
                                    alt="food4"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Right column images */}
                            <div className="flex flex-col gap-2">
                                <img
                                    src={Food4}
                                    alt="food3"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src={Food5}
                                    alt="food5"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </>)}

            {/* footer  */}
            <Footer />
        </>
    )
}

export default Editorial
