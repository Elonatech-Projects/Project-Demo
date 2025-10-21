"use client";
import { useState } from "react";
import "./styles/styles.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "it-services",
      title: "IT Services",
      description: [
        "Software Application Development",
        "Software Installation",
        "Web design and development",
      ],
      image: "/images/IT-services.jpg", // 🖼️ Replace with your image path
      bgGradient: "from-red-700 to-purple-900",
    },
    {
      id: "network-services",
      title: "Network Services",
      description: [
        "LAN/WAN Setup",
        "Network Monitoring",
        "Firewall Configuration",
      ],
      image: "/images/Network-Services.jpg", // 🖼️ Replace with your image path
      bgGradient: "from-blue-700 to-blue-900",
    },
    {
      id: "technical-security",
      title: "Technical Security",
      description: [
        "Video Surveillance",
        "Intrusion Prevention Systems",
        "GPS Tracking System",
        "Access Control & Time-Attendance Solutions",
      ],
      // image: "/images/security.jpg", // 🖼️ Replace with your image
      bgGradient: "from-gray-800 to-black",
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: [
        "Storage Infrastructure",
        "Cloud Hosting",
        "Cloud-Based ERP/CRM",
      ],
      image: "/images/cloud.jpg", // 🖼️ Replace with your image
      bgGradient: "from-indigo-800 to-cyan-900",
    },
    {
      id: "collaboration-system",
      title: "Collaboration System",
      description: [
        "Audio & Video Conferencing",
        "Live Streaming",
        "Radio Communications Systems",
      ],
      image: "/images/Collaboration-system.jpg", // 🖼️ Replace with your image
      bgGradient: "from-teal-700 to-sky-900",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="services relative bg-red-400">
      <div className="flex flex-col relative">
        {/* Top Part */}
        <section className="services-top relative body-padding flex flex-col service-background-imag bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background-1.png')", backgroundSize:"cover", backgroundPosition:"center", filter:"none", backdropFilter:"none" }} >
          <div className="body-padding">
            {/* Header section */}
            <div className="header-section">
              <h1 className="header">Services we offer</h1>
              <p className="header-subtext">
                We offer a wide range of specialized services Designed to meet
                your <br />
                goals
              </p>
            </div>

            {/* Interactive Services Section */}
            <div className="flex flex-col lg:flex-row gap-8 mt-10">

              {/* LEFT: Service List */}
              <div className="flex flex-col gap-4 w-full lg:w-1/3">
                {services.map((service) => (
                  <div key={service.id} onMouseEnter={() => setActiveService(service)} className={`cursor-pointer px-4 py-3 border-2 rounded-md transition-all duration-300 ease-in-out service-lists
                      ${
                        activeService.id === service.id
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white text-black border-gray-200 hover:bg-red-100"
                      }`}
                  >
                    <h3 className="">{service.title}</h3>
                  </div>
                ))}
              </div>

              {/* RIGHT: Info Card */}
              <div className="relative flex w-full lg:w-2/3 min-h-[320px] h-[380px] rounded-xl overflow-hidden shadow-lg transition-all duration-500">
                {/* Background image + gradient */}
                <div
                  key={activeService.id}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out`}
                  style={activeService.image ? { backgroundImage: `url(${activeService.image})` } : { backgroundColor: 'transparent' }}
                >
                  {/* Gradient overlay using Tailwind classes. Ensure overlay sits above background image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeService.bgGradient} opacity-80`}
                  />
                </div>

                {/* Text content */}
                <div className="relative flex flex-col self-end z-10 p-6 text-white space-y-4">
                  <h2 className="text-2xl font-bold">
                    {activeService.title}
                  </h2>
                  <ul className="list-disc pl-5 space-y-1">
                    {activeService.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <button className="mt-4 px-4 w-fit py-2 bg-blue-600 hover:bg-blue-700 rounded">
                    Explore More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Part */}
        <section className="section-bottom body-padding">
          <div className="gap-10 flex flex-col body-padding">
            {/* Header Section */}
            <div className="header-section gap-8 flex flex-col">
              <h1 className="header">Industries We Serve</h1>
              <p className="header-subtext">
                Perfect Blend of Innovation & Ideation Of Solutions For Every
                Industry.
              </p>
            </div>

            {/* List of Services (Cards) */}
            <div className="flex flex-col gap-3 service-list">
              {/* First Row*/}
              <div className="card-container gap-4">
                <div className="service-item">
                  <Image
                    src="/images/online-shop.png"
                    alt="Retail"
                    width={50}
                    height={50}
                  />
                  <p>Retail, Ecommerce</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/elearning.png"
                    alt="Education"
                    width={50}
                    height={50}
                  />
                  <p>Education & e-learning</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/fitness.png"
                    alt="Fitness"
                    width={50}
                    height={50}
                  />
                  <p>Healthcare & Fitness</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/global-network.png"
                    alt="Social"
                    width={50}
                    height={50}
                  />
                  <p>Social Networking</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/logistics.png"
                    alt="Logistics"
                    width={50}
                    height={50}
                  />
                  <p>Logistics & Distribution</p>
                </div>
              </div>

              {/* Second Row */}
              <div className="card-container gap-4">
                <div className="service-item">
                  <Image
                    src="/images/enterprise.png"
                    alt="Government"
                    width={50}
                    height={50}
                  />
                  <p>Government Institution</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/real-estate.png"
                    alt="Real Estate"
                    width={50}
                    height={50}
                  />
                  <p>Real Estate</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/online-shop.png"
                    alt="Travel"
                    width={50}
                    height={50}
                  />
                  <p>Travel & Hospitality</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/restaurant-1.png"
                    alt="Restaurant"
                    width={50}
                    height={50}
                  />
                  <p>Food & Restaurant</p>
                </div>
                <div className="service-item">
                  <Image
                    src="/images/solution.png"
                    alt="On-Demand"
                    width={50}
                    height={50}
                  />
                  <p>On-demand Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
