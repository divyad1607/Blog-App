import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <Logo width="120px" />
            <p className="mt-4 text-sm text-gray-400 leading-6">
              A modern blogging platform built for developers and creators.  
              Share your thoughts with the world ✨
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white">Features</Link></li>
              <li><Link to="/" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/" className="hover:text-white">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-white">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white">Account</Link></li>
              <li><Link to="/" className="hover:text-white">Help</Link></li>
              <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white">Licensing</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MegaBlog. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
