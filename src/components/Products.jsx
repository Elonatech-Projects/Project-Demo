"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/styles.css";
import { BookOpen, FileSearch, GraduationCap, Icon, Landmark, MoveRight, Send } from "lucide-react";
export default function Products() {
  const products = [
    {
        id: 1,
        title: "DIGISCHOOL",
        image: "/images/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg", // put this in public/products/ or use any url
        description: "Comprehensive solution for administration, documentation, tracking, reporting, and automation for primary and secondary schools.",
        icon: <GraduationCap className="h-10 w-10 text-black transition-colors duration-300 group-hover:text-blue-600" />,
        button_icon: <MoveRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300"/>,
        button_text: "explore digischool",
    },
    {
        id: 2,
        title: "SPEEDUCATION",
        image: "/images/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg",
        description: "All in one learning management system for colleges and higher institutions.",
        icon: <Landmark className="h-10 w-10 text-black transition-colors duration-300 group-hover:text-blue-600" />,
        button_icon: <BookOpen className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300"/>,
        button_text: "Learn More",
    },
    {
        id: 3,
        title: "SPEED ERP SOLUTION",
        image: "/images/erp.jpg",
        description: "managing routine business operations like accounting, purchasing, project management, risk management, and compliance.",
        icon: <FileSearch className="h-10 w-10 text-black transition-colors duration-300 group-hover:text-blue-600" />,
        button_icon: <BookOpen className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300"/>,
        button_text: "Learn More",
    },
];  

  return (
    <section className="bg-gradient-to-b from-[#4a148c] via-[#6a1b9a] to-[#d32f2f] products-wrapper py-[10vh]">
        <div className="flex flex-col body-padding products-section ">

            {/* Top Section */}
            <section className="top-section flex flex-col items-center pt-10 top-section">
                <div className=" flex flex-col gap-4 text-center">
                    <h2 className="products-header">Our Products</h2>
                    <p className="products-subtext">
                        Comprehensive IT SOLUTIONS <br /> 
                        that sets your business apart 
                    </p>
                    <p className="products-subtext2">Bringing Speed to your business</p>
                </div>

                {/* Products Image */}
                <div className="products-image-container flex justify-center mt-8">
                    
                </div>
            </section>

            {/* Bottom Section */}
            {/* Products Card */}
            <section className="py-16 px-6 bottom-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((p) => (
                            <article
                                key={p.id}
                                tabIndex="0"
                                className="group bg-transparent rounded-lg outline-none relative flex flex-col h-full  duration-300 cursor-pointer"
                                aria-label={p.title}
                                >
                                {/* Image */}
                                <div className="h-100 bg-gray-100 rounded-t-xl overflow-hidden p-2">
                                    <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                                </div>

                                {/* Title + Icon (always visible) */}
                                <div className="flex flex-col items-center justify-center bg-white py-5 rounded-b-xl w-4/5 mx-auto group-focus-within: group-hover:shadow-lg  duration-300 -top-10 relative">
                                    <div className="flex items-center gap-3 text-gray-800">
                                    {p.icon}
                                    <h3 className="text-xl font-semibold">{p.title}</h3>
                                    </div>

                                    {/* Description slides down on hover */}
                                    <div className=" flex flex-col text-center gap-5 pt-4 overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-96 group-focus-within:max-h-32">
                                        <p className=" px-4 text-sm transition-all duration-300 group-hover:translate-y-0 card-description group-focus-within:translate-y-0">
                                            {p.description}
                                        </p>
                                        <a href="" className="bg-[#b41e24] flex-row-reverse w-fit self-center p-2 mt-4 rounded-lg text-white flex items-center gap-3 group hover:bg-blue-600 transition-colors duration-300">
                                            {p.button_text} {p.button_icon}
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Button */}
            <section className="flex justify-center mt-8">
                <a href="#" className="bg-[#b41e24] text-white px-5 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    View all our products
                    <Send className="h-5 w-5 text-current ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"/>
                </a>
            </section>

        </div>
    </section>
  );
}