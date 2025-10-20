"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/styles.css";
import { Send } from "lucide-react";
export default function Products() {
    // const products = []
    //     {
    //         id: 1,
    //         title: "Product 1",
    //         description: "Description for Product 1",
    //         image: "/images/product1.jpg"
    //     },
    //     {
    //         id: 2,
    //         name: "Product 2",
    //         description: "Description for Product 2",
    //         image: "/images/product2.jpg"
    //     },
    //     {
    //         id: 3,
    //         name: "Product 3",
    //         description: "Description for Product 3",
    //         image: "/images/product3.jpg"
    //     }
    // ];
  return (
    <section className="">
        <div className="flex flex-col body-padding products-section ">
            {/* Top Section */}
            <section className="top-section flex flex-col items-center pt-10 ">
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

            
        </div>
    </section>
  );
}