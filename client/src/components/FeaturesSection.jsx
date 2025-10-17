import { useUser } from "@clerk/clerk-react";
import { AiToolsData } from "../assets/assets";
import { NavLink } from "react-router-dom";
export default function FeaturesSection() {
  const { user } = useUser();
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Powerful AI Tools
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Everything you need to create, enhance, and optimize your content
            with cutting-edge AI technology. AI Article Writer Generate
            high-quality, engaging articles on any topic with our AI writing
            technology. Blog Title Generator Find the perfect, catchy title for
            your blog posts with our AI-powered generator.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {AiToolsData.map((feature, index) => (
              <NavLink
                to={user ? feature.path : "/"}
                className="relative pl-16 cursor-pointer"
                key={index}
              >
                <dt className="text-base/7 font-semibold text-white">
                  <div
                    className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg"
                    style={{
                      background: `linear-gradient(to bottom, ${feature.bg.to}, ${feature.bg.from})`,
                    }}
                  >
                    <feature.Icon className="w-6 h-6" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </NavLink>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
