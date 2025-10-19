import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  const { user } = useUser();

  return (
    <div className="relative isolate px-6 pt-14 min-h-screen overflow-hidden lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-8xl dark:text-white">
            Create amazing content with{" "}
            <span className="text-indigo-600">AI tools</span>
          </h1>
          <p className="mt-4 text-md font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to={user ? "/ai" : "/"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Start Creating Now
            </NavLink>
            <NavLink
              to={user ? "/ai" : "/"}
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Watch demo <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>
    </div>
  );
};
