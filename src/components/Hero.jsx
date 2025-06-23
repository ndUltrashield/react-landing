import React from "react";
import { BiRightArrowAlt, BiSolidStar } from "react-icons/bi";
import Heroimg from "../assets/hero-image.png";

const Hero = () => {
    return (
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-48 pb-6 px-4 sm:px-6 lg:px-8">
            {/* left side */}
            <div className="w-full md:w-1/2 space-y-8">
                {/* Star */}
                <div className="flex items-center gap-2 bg-amber-100 w-fit px-5 py-2 rounded-full group hover:bg-blue-100 cursor-pointer">
                    <BiSolidStar className="text-amber-600 group-hover:scale-110 transition-transform group-hover:text-blue-500 animate-spin group-hover:animate-pulse" />
                    <span className="font-normal text-sm"> Write a tagline here you Idiot!</span>
                </div>
                {/* heading */}
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight capitalize">
                    Use your mind and write{" "}
                    <span className="text-amber-500">something meaningful</span> here. Ok?
                </h1>
                {/* para */}
                <p className="text-gray-500 text-lg md:text-xl max-w-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
                    sunt, officiis recusandae, vero placeat adipisci totam asperiores
                    necessitatibus minima atque, illum ea? Perferendis quasi itaque
                    temporibus? Iusto repudiandae numquam maxime.
                </p>
                <div className="flex items-center max-w-md gap-3">
                    <input
                        type="email"
                        placeholder="Enter Email.."
                        className="flex-1 px-6 py-3 border w-full border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <button className="bg-amber-600 py-4 px-8 rounded-lg text-white cursor-pointer group hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-colors"> <BiRightArrowAlt className="text-lg group-hover:translate-x-2 transition-transform" /> </button>
                </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
                <img
                    src={Heroimg}
                    alt="hero-img"
                    className="hover:scale-101 transition-transform"
                />
            </div>
        </section>
    );
};

export default Hero;
