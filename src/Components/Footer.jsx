// src/components/Footer.jsx
import React, { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 shadow-lg">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Section */}
        <div data-aos="fade-up" className="flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Contact</h3>
            <p className="text-xl mb-4">iete.spit.ac.in</p>
            <p className="text-xl mb-4">
              <span className="font-semibold">Asmiya Sayyad:</span> +91 9820314021
            </p>
            <p className="text-xl mb-6">
              <span className="font-semibold">Woodrow Gonsalves:</span> +91 93309 97463
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/iete_spit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram className="h-10 w-10 md:h-12 md:w-12" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/iete-spit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaLinkedin className="h-10 w-10 md:h-12 md:w-12" />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCvumRiXhsBVh3qzsOHis2kA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-500 transition-transform transform hover:scale-110"
              >
                <FaYoutube className="h-10 w-10 md:h-12 md:w-12" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/iete.spit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-700 transition-transform transform hover:scale-110"
              >
                <FaFacebook className="h-10 w-10 md:h-12 md:w-12" />
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div data-aos="fade-up" className="mt-8 md:mt-0">
          <h3 className="text-3xl font-bold mb-6">Location</h3>
          <p className="text-xl mb-6 leading-relaxed">
            Bhavan's Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai,
            Maharashtra 400058
          </p>
          <iframe
            title="SPIT Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.268673594539!2d72.836283!3d19.123691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1732028409907!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-lg">
        © {new Date().getFullYear()} IETE SPIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
