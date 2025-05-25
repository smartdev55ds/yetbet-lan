import React from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaMediumM,
} from "react-icons/fa";
import Logo from "./Logo";
const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 relative text-base-content py-10 px-4 bg-gradient-to-br from-[#181A20] via-[#23263a] to-[#7c3aed]">
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-8 grid-cols-2 gap-x-6 gap-y-2 text-sm text-center text-white">
          <a className="link link-hover">About</a>
          <a className="link link-hover">How It Works</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">$YET Token</a>
          <a className="link link-hover">Roadmap</a>
          <a className="link link-hover">White Paper</a>
          <a className="link link-hover">RULES</a>
          <a className="link link-hover">Legal</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          <a className="btn btn-circle btn-sm bg-base-100" href="https://x.com/officialYETBet" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a className="btn btn-circle btn-sm bg-base-100" href="https://t.me/YETbet" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a className="btn btn-circle btn-sm bg-base-100" >
            <FaDiscord />
          </a>
          <a className="btn btn-circle btn-sm bg-base-100" >
            <FaMediumM />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-base-300 mt-4"></div>

        {/* Copyright */}
        <p className="text-xs text-center mt-2 text-base-300">
          © 2025 YETbet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
