import Image from "next/image";
import { ChevronRight, Send } from "lucide-react";
import "./styles/styles.css";
export default function CaseStudies() {
  return (
    <section className="case-studies py-[10vh]">
        <div className="flex flex-col bottom-section body-padding gap-10">
            {/* Header section */}
            <div className="header-section flex justify-between">
                <div className="left-side gap-5 flex flex-col">
                    <h2 className="products-header">Case Studies</h2>
                    <p className="products-subtext">
                    We proud to have helped build innovative solutions solving complex problems across varying industries. Check out what we've been up to.
                    </p>
                </div>
                <button className="flex px-4 w-fit py-2 gap-1 secondary-button">
                    <span>See more of our work</span>
                    <Send />
                </button>
            </div>
            

            {/* Hero Section */}
            <div className="flex flex-col gap-10">

                {/* First One */}
                <div className="flex hero-section">
                    <div className="flex card p-10 w-1/2">
                        {/* Left Side (Card) */}
                        <div className="flex flex-col gap-4 self-center">
                            <h3 className="card-header">Integration of a secured <br /> and reliable examination platform</h3>
                            <p className="card-subtext">We built a hitch-free proctoring software for the School of Public Health, University of Port Harcourt that offers students and test takers the freedom to take a proctored exam at any time in any given location...</p>
                            <button className="card-button flex w-fit">
                                View Case Study
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex image-section w-1/2">
                        <Image src="/images/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg"
                            alt="Case Study 1"
                            width={600}
                            height={600}
                            className="object-cover rounded-lg self-center"
                        />
                    </div>
                </div>

                <div className="flex hero-section w-full">
                    {/* Image */}
                    <div className="w-1/2 flex self-end">
                        <Image src="/images/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp"
                            alt="Case Study 1"
                            width={800}
                            height={600}
                            className="object-cover rounded-lg self-center"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex card px-12 w-1/2 left-side" id="second-card">
                        <div className="flex flex-col gap-4 self-center text-justify">
                            <h3 className="card-header">Hybrid Learning Facility</h3>
                            <p className="card-subtext">We developed a platform that can accommodate students who are unable to attend classes in person while also allowing students to attend classes in person or remotely with real-time audio and visual communication…</p>
                            <button className="card-button flex w-fit">
                                View Case Study
                                <ChevronRight />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}