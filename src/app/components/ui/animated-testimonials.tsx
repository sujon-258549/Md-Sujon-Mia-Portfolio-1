"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState<number[]>([]);

  // Handle next testimonial
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Check if the index is the active testimonial
  const isActive = (index: number) => {
    return index === active;
  };

  // Set random rotation after component mount to avoid SSR issues
  useEffect(() => {
    if (testimonials?.length) {
      const rotations = testimonials.map(
        () => Math.floor(Math.random() * 21) - 10
      );
      setRotation(rotations);
    }
  }, [testimonials]);

  // Handle autoplay if enabled
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="px-6 md:max-w-4xl mx-auto antialiased font-sans  md:px-8 lg:px-12 py-10 md:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="">


            <div className="relative h-40 md:h-60 lg:h-80 w-full">
              <AnimatePresence>
                {testimonials?.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotation[index] ?? 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotation[index] ?? 0,
                      zIndex: isActive(index)
                        ? 99
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotation[index] ?? 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="relative aspect-square w-full max-w-[200px] lg:max-w-[300px] mx-auto md:max-w-none md:mx-0">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        fill // This makes the image fill the container
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 20vw, 10vw" // Responsive sizing
                        draggable={false}
                        className="rounded-3xl object-cover object-center"
                        quality={85} // Optimized quality
                        priority={false} // Lazy load by default
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-white pb-4">
              {testimonials[active]?.name}
            </h3>
            <p className="text-sm text-gray-300 dark:text-neutral-500">
              {testimonials[active]?.designation}
            </p>
            <motion.p className="text-lg text-gray-300 mt-8 dark:text-neutral-300">
              {testimonials[active]?.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
