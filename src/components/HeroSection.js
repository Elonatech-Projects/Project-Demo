import Image from "next/image"
import "./styles/styles.css"
import { Send } from "lucide-react"
export default function HeroSection() {
	return (
		<section className="hero py-8 text-center body-padding">
			<div className="max-h-full flex flex-col">
				<div className="flex flex-row justify-between">
					<div className="flex flex-col w-1/2 text-left gap-3">
						<p className="text-red-500">SPEEDLINK HI-TECH SOLUTIONS LIMITED</p>
						<h1 className="text-4xl font-bold">A Complete Solution<br/>IT Provider</h1>
						<p className="mt-4">Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems <br/> provider, known for providing clients with Enterprise world-class <br/> solutions addressing their local business needs. We deliver positive, <br/> rapid and the best return on investment “ROI” solutions for our <br/>customers.</p>
						<button className="bg-red-500 max-w-fit flex items-center gap-2 p-3 text-white">
							<p>Who we are</p> 
							<Send />
						</button>
					</div>
					<div className="flex w-1/2">
						<Image className="herosection-image" src="/images/Speed-web-01-1024x682.jpg" alt="Speedlink Hi-Tech Solutions" layout="responsive" width={120} height={120} />
					</div>

				</div>

				{/* Bottom side */}
				<section className="flex justify-between items-center bg-[#314288]">
					<Image src="/images/pearson-vue-1.gif" className="max-w-1/3" alt="Pearson vue" layout="responsive" width={130} height={120}/>
					<div className="flex flex-col gap-3 w-1/3 bg-red-400">
						<h2 className="font-bold text-[25px]">Pursue Your Certification Dreams with Speedlink!</h2>
						<p className="text-[17px] font-normal">We&apos;re excited to announce that we&apos;re now an official Pearson VUE testing center! <br/> Schedule your exam today and unlock your full potential</p>
					</div>
					<div className="w-1/3">
						<button className="btn-red">
							Get Certified
						</button>
					</div>
				</section>

			</div>
		</section>
	)
}
