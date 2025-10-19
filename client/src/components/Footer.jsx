import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center mb-3">
          <img src={assets.logo} alt="" className="h-24 w-auto" />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="https://prebuiltui.com">Rapid AI </a> ©2025. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
