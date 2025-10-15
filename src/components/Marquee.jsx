"use client"
import Image from "next/image";
import styles from './Marquee.module.css';

const images = [
    "/images/rhs-logo.png", ,
    "/images/foundation-logo.png", ,
    "/images/phs-logo.png", ,
    // Add more images as needed
];

export default function Marquee( {images: propImages = null, speed = 20} ) {
    const displayImages = [
        "/images/rhs-logo.png",
        "/images/foundation-logo.png",
        "/images/phs-logo.png",
    ];

    const images= propImages && propImages.length ? propImages : displayImages;
    const doubled = [...images, ...images];
    
    return (
        <div
        className={styles.marquee}
        //pass the speed to css via inline style (seconds)
        style={{["--duration"]: `${speed}s`}}
        >
            <div className={styles.inner}>{doubled.map((src, idx) => (
                <div key={idx} className="styles.item">
                    <Image src={src} alt={`Client logo ${idx + 1}`} width={150} height={100} className="object-contain"/>
                </div>
            ))}</div>
        </div>
    )
}