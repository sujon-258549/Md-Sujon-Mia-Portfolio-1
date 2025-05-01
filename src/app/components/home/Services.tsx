import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Services = () => {
  const testimonials = [
    {
      quote:
        "This is the best service I've ever used. The team is incredibly helpful and professional.",
      name: "Frontend Development",
      designation:
        "We specialize in creating modern and responsive user interfaces using React,",
      src: "https://img.freepik.com/premium-vector/vector-colorful-illustration-programmer-working_1045608-6.jpg?ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740", // Replace with your image path
    },
    {
      quote:
        "An amazing experience! The project was completed ahead of schedule and exceeded our expectations.",
      name: "Backend Development",
      designation:
        "We provide robust backend development using Node.js, Express, and databases like MongoDB.",
      src: "https://cdn.pixabay.com/photo/2023/12/15/11/13/programming-8450423_1280.png", // Replace with your image path
    },
    {
      quote:
        "I highly recommend this service. The team is skilled, communicative, and delivers high-quality work.",
      name: "Web Development",
      designation:
        "Comprehensive web development services, combining both frontend and backend expertise to build scalable applications.",
      src: "https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg?auto=compress&cs=tinysrgb&w=1200", // Replace with your image path
    },
    {
      quote:
        "I highly recommend this service. The team is skilled, communicative, and delivers high-quality work.",
      name: "MERN Stack Development",
      designation:
        "Leveraging MongoDB, Express, React, and Node.js to deliver fast, scalable, and efficient full-stack applications.",
      src: "https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp", // Replace with your image path
    },
    {
      quote:
        "A smooth experience! React development with clean, maintainable code and fast performance.",
      name: "React.js Development",
      designation:
        "Expert in building dynamic, high-performance React.js applications with modern hooks, state management, and optimized rendering.",
      src: "https://www.bigscal.com/wp-content/uploads/2023/07/Reasons-to-Outsource-ReactJS-Development-Services.webp", // Replace with your image path
    },
  ];

  return (
    <div className=" md:pt-8 pb-0  lg:pt-20 md:pb-5">
      <div>
        <div className="text-center  lg:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <div className="max-w-[80%] md:max-w-[500px] h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-emerald-400/0 mx-auto"></div>
        </div>
      </div>
      <div className="text-white">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
};

export default Services;
