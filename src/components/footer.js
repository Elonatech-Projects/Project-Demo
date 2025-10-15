// import { Main } from "next/document"
import Image from "next/image"

export default function Footer() {
  return (
    <>
    <section className="bg-white">
        <div className="flex flex-col items-center text-black">
            
            {/* Marquee */}
            
        </div>
    </section>


    <section className="flex flex-row justify-center max-w-full bg-[#020924] text-white p-20 space-x-4 max-h-1/2">

        {/* First column */}
        <section className=" relative container p-4 max-w-1/4 bg-[#1e263f] rounded-3xl flex max-h-min">
            <div className="flex flex-col py-13 gap-y-4 self-center">
                <div className="px-5">   
                    <Image src="/images/speed-link footer.webp" alt="Logo" width={997} height={414} />
                </div>
                <p className="text-sm font-normal text-center">Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of technical expertise, strategic thinking, and hands-on skills.</p>
            </div>
        </section>

        {/* Second column */}
        <section className="relative container p-4 max-w-1/4 bg-[#1e263f] rounded-3xl flex max-h-min">
            <div className="flex flex-col w-full self-center gap-y-5 my-2">
                <div className="text-left">   
                    <h3 className="font-bold text-2xl">Services</h3>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row p-3 gap-x-2 border-b border-gray-500 font-light text-lg">
                            <span>➤</span>
                            <a href="">Digital Services</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row p-3 gap-x-2 border-b border-gray-500 font-light text-lg">
                            <span>➤</span>
                            <a href="">Cloud Services</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row p-3 gap-x-2 border-b border-gray-500 font-light text-lg">
                            <span>➤</span>
                            <a href="">Networking Services</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row p-3 gap-x-2 border-b border-gray-500 font-light text-lg">
                            <span>➤</span>
                            <a href="">Certified Training</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        
        {/* Third column */}
        <section className="relative container p-4 max-w-1/4 bg-[#1e263f] rounded-3xl flex max-h-min">
            <div className="flex flex-col w-full self-center gap-y-5 my-2">
                <div className="text-left">   
                    <h3 className="font-bold text-2xl">Quick Links</h3>
                </div>
                <div className="flex flex-col gap-y-5 mb-7">
                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">Our Products</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">Case Studies</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">Who we are</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">Why choose us</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">What we do</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-2 cursor-pointer">
                        <div className="flex flex-row gap-x-2">
                            <span>➤</span>
                            <a href="">Meet our team</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    
        {/* Fourth column */}
        <section className="relative container p-4 max-w-1/4 bg-[#1e263f] rounded-3xl flex max-h-min">
            <div className="flex flex-col w-full self-center gap-y-9">
                <div className="pt-2">   
                    <h3 className="font-bold text-2xl">Locate us</h3>
                </div>
                <div className="">
                    <div className="text-lg font-normal">
                        <div>Road 6 Extension, Okey Wali</div>
                        <div className="">Estate, Rumualogu, Port Harcourt,</div>
                        <div>Rivers State</div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-y-3">
                    <button className="flex flex-row space-x-2 cursor-pointer bg-gray-500 p-2 rounded-md text-white max-w-fit border text-sm font-normal border-white">
                        <span>📞</span>
                        <a href="tel:+2348031234567">+2349167716220</a>
                    </button>
                    <button className="flex flex-row space-x-2 cursor-pointer bg-gray-500 p-2 rounded-md text-white max-w-fit border border-white">
                        <span>📧</span>
                        <a href="mailto:info@speedlinkng.com">info@speedlinkng.com</a>
                    </button>
                </div> 

                <div className="flex flex-row gap-x-4 mt-4">
                    <a>F</a>
                    <a>T</a>
                    <a>Y</a>
                    <a>I</a>
                    <a>L</a>
                </div>   
            
            </div>
        </section>
    </section>


    <footer className="p-6 text-center bg-[#424242] text-white text-sm max-h-1/20">
      <p> Copyright © 2022 -  {new Date().getFullYear()} Speedlink Hi-TECH Solutions Limited</p>
    </footer>

  </>
  )
}
