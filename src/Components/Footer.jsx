import React, { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import logotext from "../assets/logoietetext.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-7">
      <div className="container mx-auto px-6 lg:px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Contact Section */}
        <div className="flex flex-col  items-center sm:items-start">
         <div className="flex flex-row"><img
            src={logotext}
            alt="IETE Logo"
            className="h-28 mb-4" // Adjusted logo size
          />
          <img
            src={logotext}
            alt="IETE Logo"
            className="h-28 mb-4" // Adjusted logo size
          /></div>
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          <p className="text-xl font-semibold mb-1">Email: <a href="mailto:iete.spit.ac.in" className="text-yellow-400">iete.spit.ac.in</a></p>
          <p className="text-md ">
            <span className="font-semibold">Asmiya Sayyad</span>:  +91 9820314021
          </p>
          <p className="text-md ">
            <span className="font-semibold">Woodrow Gonsalves</span>: +91 9330997463
          </p>
        </div>


 {/* Social Media Section */}
        <div className="flex flex-col px-1 items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex gap-6">
          <a
  href="https://www.instagram.com/iete_spit/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group transition-transform transform hover:scale-110"
>
  <span
    className="absolute inset-0 rounded-full bg-pink-500 blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition duration-300"
  ></span>
  <FaInstagram className="h-10 w-10 relative text-pink-500 bg-gray-900 rounded-full p-2" />
</a>
<a
  href="https://www.linkedin.com/company/iete-spit/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group transition-transform transform hover:scale-110"
>
  <span
    className="absolute inset-0 rounded-full bg-blue-700 blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition duration-300"
  ></span>
  <FaLinkedin className="h-10 w-10 relative text-blue-700 bg-gray-900 rounded-full p-2" />
</a>

<a
  href="https://www.youtube.com/channel/UCvumRiXhsBVh3qzsOHis2kA"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group transition-transform transform hover:scale-110"
>
  <span
    className="absolute inset-0 rounded-full bg-red-600 blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition duration-300"
  ></span>
  <FaYoutube className="h-10 w-10 relative text-red-600 bg-gray-900 rounded-full p-2" />
</a>

<a
  href="https://www.facebook.com/iete.spit/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group transition-transform transform hover:scale-110"
>
  <span
    className="absolute inset-0 rounded-full bg-blue-800 blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition duration-300"
  ></span>
  <FaFacebook className="h-10 w-10 relative text-blue-800 bg-gray-900 rounded-full p-2" />
</a>

          </div>
        </div>

        

        {/* Quick Links Section */}
        <div className="flex flex-col px-5 items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-2">Links</h3>
          <ul className="space-y-2 text-xl font-semibold">
            <li>
              <a href="#home" className=" hover:text-yellow-400">Home</a>
            </li>
            <li>
              <a href="#teams" className=" hover:text-yellow-400">Teams</a>
            </li>
            <li>
              <a href="#events" className=" hover:text-yellow-400">Events</a>
            </li>

            <li>
              <a href="#events" className=" hover:text-yellow-400">Tech Talks</a>
            </li>
          </ul>
        </div>
              

              {/* Location Section */}
        <div data-aos="fade-up" className="flex flex-col px-3 items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-2">Location</h3>
          <p className="text-md text-wrap sm:text-left leading-relaxed mb-4">
            Bhavan's Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai,
            Maharashtra 400058
          </p>
          <iframe
            title="SPIT Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.268673594539!2d72.836283!3d19.123691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan's%20Sardar%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1732028409907!5m2!1sen!2sin"
            width="120%"
            height="180"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
       
        
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-5  border-t border-gray-800 pt-3 text-center text-xs text-gray-500">
        <p className="text-md">© {new Date().getFullYear()} IETE SPIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

