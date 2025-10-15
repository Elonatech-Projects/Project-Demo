import Image from "next/image";

export default function Blog() {
  return (
    <section className="blog flex text-center justify-center bg-white gap-8">
      <div className="items-center flex flex-col text-black gap-3 p-3 bg-[#f6f6f6] px-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-red-800 text-lg "> Our Blog</h4>
          <h1 className="text-6xl font-bold">Insights & Expertise</h1>
          <p className=" font-normal text-[17px]">Explore Our Blog For Expert Insights and Industry Trends</p>
        </div>

        <div className="flex flex-col items-center gap-1">
            {/* First Card */}
          <div className="flex flex-row bg-white gap-5 max-w-[90%] text-gray-500">
              <Image src="/images/woman-holding-a-laptop.jpg" alt="woman-holding-a-laptop" width={300} height={200}/>
              <div className="flex flex-col text-start pr-2 pt-8">
                <a href="" className="py-2 px-1 bg-[#e4e4e4] text-black rounded-2xl max-w-fit text-[12px]">Uncategorized</a>
                <a className="font-bold text-black hover:text-blue-400 cursor-pointer ">Empowering the Next Generation of Women in Tech</a>
                <div className="flex flex-row gap-2 text-[12px]">
                    <div className=""><a>Admin Speedlink</a> <span className="self-center">.</span> </div>
                    <div><a>April 21, 2025</a> . </div>
                    <div><a>No comments</a></div>
                </div>
                <div>
                    <p className="text-sm pt-2">
                    In a world increasingly deiven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...
                    </p>
                </div>
              </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-row bg-white gap-5 max-w-[90%] text-gray-500">
              <Image src="/images/STEM CLASS.jpg" alt="woman-holding-a-laptop" width={300} height={200}/>
              <div className="flex flex-col text-start pr-2 pt-8">
                <a href="" className="py-2 px-1 bg-[#e4e4e4] text-black rounded-2xl max-w-fit text-[12px]">Uncategorized</a>
                <a className="font-bold text-black hover:text-blue-400 cursor-pointer ">Why We Need More Women in STEM Now</a>
                <div className="flex flex-row gap-2 text-[12px]">
                    <div className=""><a>Admin Speedlink</a> <span className="self-center">.</span> </div>
                    <div><a>April 21, 2025</a> . </div>
                    <div><a>No comments</a></div>
                </div>
                <div>
                    <p className="text-sm pt-2">
                    STEM: Science, technology, engineering, and mathematics shapes how we live, work, and solve problems every day. Yet, despite the growing demand for …
                    </p>
                </div>
              </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-row bg-white gap-5 max-w-[90%] text-gray-500">
              <Image src="/images/SOFT SKILLS.jpg" alt="woman-holding-a-laptop" width={300} height={200}/>
              <div className="flex flex-col text-start pr-2 pt-8">
                <a href="" className="py-2 px-1 bg-[#e4e4e4] text-black rounded-2xl max-w-fit text-[12px]">Uncategorized</a>
                <a className="font-bold text-black hover:text-blue-400 cursor-pointer ">Why We Need More Women in STEM Now</a>
                <div className="flex flex-row gap-2 text-[12px]">
                    <div className=""><a>Admin Speedlink</a> <span className="self-center">.</span> </div>
                    <div><a>April 21, 2025</a> . </div>
                    <div><a>No comments</a></div>
                </div>
                <div>
                    <p className="text-sm pt-2">
                    In the world of tech, coding languages, frameworks, and digital tools often take center stage. But beyond the lines of code and …
                    </p>
                </div>
              </div>
          </div>

          {/* Fourth Card */}
          <div className="flex flex-row bg-white gap-5 max-w-[90%] text-gray-500">
              <Image src="/images/training.jpg" alt="woman-holding-a-laptop" width={300} height={200}/>
              <div className="flex flex-col text-start pr-2 pt-8">
                <a href="" className="py-2 px-1 bg-[#e4e4e4] text-black rounded-2xl max-w-fit text-[12px]">Uncategorized</a>
                <a className="font-bold text-black hover:text-blue-400 cursor-pointer ">Why Hands-On Learning Is More Effective Than Theory</a>
                <div className="flex flex-row gap-2 text-[12px]">
                    <div className=""><a>Admin Speedlink</a> <span className="self-center">.</span> </div>
                    <div><a>April 21, 2025</a> . </div>
                    <div><a>No comments</a></div>
                </div>
                <div>
                    <p className="text-sm pt-2">
                    For those eager to master new skills today, SpeedLink Hi-Tech Solutions Limited is here to guide you. With hands-on training programs designed …
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}