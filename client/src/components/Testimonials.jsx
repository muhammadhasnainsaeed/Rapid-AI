import { dummyTestimonialData } from "../assets/assets";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      {/* Testimonials section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          What Our Students Say
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-4">
          Join thousand of successful students who transformed their careers
          with us
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-16 text-left">
          {dummyTestimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 flex flex-col items-start border border-gray-700 p-5 rounded-lg bg-gray-800"
            >
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                  fill="#6e78e6"
                />
              </svg>
              <div className="flex items-center justify-center mt-3 gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, rate) => (
                    <Star
                      key={rate}
                      fillOpacity={testimonial.rating > rate ? 1 : 0.5}
                      fill="#facc14"
                      color="#facc14"
                      size={"14"}
                    />
                  ))}
              </div>
              <q className="text-sm mt-3 text-gray-400">
                {testimonial.content}
              </q>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="h-12 w12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h2 className="text-lg text-gray-300 font-medium">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
