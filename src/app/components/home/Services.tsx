import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Services = () => {
  const testimonials = [
    {
      quote:
        "This is the best service I've ever used. The team is incredibly helpful and professional.",
      name: "Frontend Development",
      designation:
        "We specialize in creating modern and responsive user interfaces using React, Vue, and Angular.",
      src: "https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48", // Replace with your image path
    },
    {
      quote:
        "An amazing experience! The project was completed ahead of schedule and exceeded our expectations.",
      name: "Backend Development",
      designation:
        "We provide robust backend development using Node.js, Express, and databases like MongoDB and SQL.",
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
    <div className="py-10 md:py-20">
      <div>
        <h1
          className="
            text-3xl text-white font-bold  md:text-5xl text-center "
        >
          Our Services
        </h1>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default Services;
