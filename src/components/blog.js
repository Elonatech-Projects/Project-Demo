import Image from "next/image";

export default function Blog() {
  return (
    <section className="blog flex text-center justify-center bg-white gap-8">
      <div className="self-center text-black gap-3 p-3 bg-[#f6f6f6]">
        <div className="flex flex-col gap-4">
            <h4 className="text-red-800 text-lg "> Our Blog</h4>
            <h1 className="text-6xl font-bold">Insights & Expertise</h1>
            <p className=" font-normal text-[17px]">Explore Our Blog For Expert Insights and Industry Trends</p>
        </div>

        <div>
            {/* First Card */}
            <div className="flex flex-row bg-white">
                <Image src="/images/woman-holding-a-laptop.png" alt="woman-holding-a-laptop" width={600} height={400}/>
                <div className="flex flex-col text-start">
                    <a href="" className="py-2 bg-[#e4e4e4] rounded-xl max-w-fit">Uncategorized</a>
                    <a className="font-bold hover:text-blue-400 cursor-pointer ">Empowering the Next Generation of Women in Tech</a>
                    <div className="flex flex-row gap-2 text-[12px]">
                        <div><a>Admin Speedlink</a> . </div>
                        <div><a>April 21, 2025</a> . </div>
                        <div><a>No comments</a></div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                        In a world increasingly deiven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}