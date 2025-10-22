"use client"
import Image from "next/image"
import "./styles/styles.css"
import React, { useEffect } from "react"
import { ArrowRight, Send } from "lucide-react"
export default function HeroSection() {
	useEffect(() => {
		const aboutLink = document.getElementById("about-link");

		const handleMouseEnter = (e) => {
		const rect = aboutLink.getBoundingClientRect();
		aboutLink.style.setProperty("--x", `${e.clientX - rect.left}px`);
		aboutLink.style.setProperty("--y", `${e.clientY - rect.top}px`);
		};

		aboutLink.addEventListener("mouseenter", handleMouseEnter);

		// Cleanup listener on unmount (important in React)
		return () => {
		aboutLink.removeEventListener("mouseenter", handleMouseEnter);
		};
	}, []);

	return (
		<section className="min-h-[50vh]">
			<div className=" flex flex-col">
				{/* Major Video Background */}
				<section className="relative h-[90vh] flex justify-center items-center video-play text-white overflow-hidden">
					{/* Background video */}
					<video
						className="absolute top-0 left-0 w-full h-full object-cover z-0"
						autoPlay
						loop
						muted
						playsInline
					>
						<source src="/images/background%20video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="absolute top-0 left-0 w-full h-full bg-[#003366]/80 z-[1]"></div>


					{/* Content over video */}
					<div className="relative z-10 flex flex-col self-center justify-center max-w-3/5 gap-10 text-white text-center px-4">
						<div className="flex flex-col gap-4">
							<h1 className="text-4xl md:text-6xl font-bold">
								We provide comprehensive IT solutions that make businesses stand out
							</h1>
							<p className="font-normal text-[17px]">
								Were a team of IT experts who help you transform and scale your organization
							</p>
						</div>
						<div className="flex justify-center">
							<a className="" href="#" id="shrink-hover">
								<ArrowRight />
								<p> IT SOLUTIONS AND SERVICES </p>
							</a>
						</div>
					</div>
				</section>



				{/* Top Part */}
				<section className="hero relative flex hero-section-background-image">
					<div className="flex self-center justify-between body-padding w-full gap-5 h-3/4 ">
						{/* Left Side */}
						<div className="flex flex-col w-1/2 text-left gap-10 hero-left justify-start both-sides">
							<p className="text-red-500 font-bold">SPEEDLINK HI-TECH SOLUTIONS LIMITED</p>
							<h1 className="hero-header-text">A Complete Solution IT Provider</h1>
							<p className="hero-subtext">Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems <br/> provider, known for providing clients with Enterprise world-class <br/> solutions addressing their local business needs. We deliver positive, <br/> rapid and the best return on investment “ROI” solutions for our <br/>customers.</p>
							<a href="#about" id="about-link">
								<p>Who we are</p> 
								<Send />
							</a>
						</div>
						{/* Right Side */}
						<div className="w-1/2 both-sides">
							<img src="/images/Speed-web-01-1024x682.jpg" alt="Two people" className="herosection-image"/>
						</div>
						{/* <div className="w-1/2 bg-red-700 self-start justify-start pb-0.5 both-sides">
						</div> */}
					</div>
				</section>

				{/* Bottom side */}
				<section className="bg-white body-padding my-4">
					<div className="flex justify-between items-center bg-[#314288] text-white py-10 my-8 h-2/5 px-3">
						{/* Image */}
						<div className="flex items-center w-1/4 justify-center">
							<img src="/images/pearson-vue-1.gif" className="pearson-vue" alt="Pearson vue" />
						</div>
						{/* Center */}
						<div className="flex flex-col gap-3 w-1/2 justify-start">
							<h2 className="font-bold text-[25px] text-center self-start">Pursue Your Certification Dreams with Speedlink!</h2>
							<p className="text-[17px] font-normal text-left">We&apos;re excited to announce that we&apos;re now an official Pearson VUE testing center! <br/> Schedule your exam today and unlock your full potential</p>
						</div>
						<div className="flex justify-center w-1/4 px-4">
							<a className="btn-red" href="#certification">
								Get Certified
							</a>
						</div>
					</div>
				</section>

			</div>
		</section>
	)
}
