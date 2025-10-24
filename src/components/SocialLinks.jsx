import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

export default function SocialLinks() {
  return (

<section className="nav-header py-[1vh]">
        <div className="py-3 container nav-padding">
          <section className="flex justify-between">
            {/* Left-side */}
            {/* Social Links */}
            <div className="flex nav-social-links">
              <ul className="flex items-center space-x-4 text-sm px-6">
                <li className="hover:cursor-pointer nav-social">
                  <Facebook id="nav-icons" />
                </li>
                <li className="hover:cursor-pointer nav-social">
                  <Twitter id="nav-icons"/>
                </li>
                <li className="hover:cursor-pointer nav-social">
                  <Linkedin id="nav-icons"/>
                </li>
                <li className="hover:cursor-pointer nav-social">
                  <Instagram id="nav-icons"/>
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="flex gap-2 social-right text-[12px]">
              <a className="btn-navlink flex items-center gap-2 bg-[#1f44b4] text-white rounded-sm" href="tel:+2349167716220">
                <Phone className="nav-icons" />
                <p>tel: +2349167716220</p>
              </a>
              <a className="btn-navlink flex items-center gap-2 bg-[#1f44b4] text-white rounded-sm" href="mailto:info@speedlinkng.com">
                <Mail className="nav-icons" />
                <span>info@speedlinkng.com</span>
              </a>
            </div>
          </section>
        </div>
      </section>
  )
}