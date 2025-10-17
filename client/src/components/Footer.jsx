import React from "react";

export default function Footer() {
  return (
    <footer class="w-full bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div class="flex items-center space-x-3 mb-6">
          <img
            alt=""
            class="h-11"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg"
          />
        </div>
        <p class="text-center max-w-xl text-sm font-normal leading-relaxed">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="https://prebuiltui.com">prebuiltui</a> ©2025. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
