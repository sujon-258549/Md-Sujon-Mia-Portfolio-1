import { Project01 } from "./project/Project1";
import { Project02 } from "./project/Project2";
// import { Project03 } from "./project/Project3";

const Project = () => {
  return (
    <div className="pt-16 pb-8 md:pt-32 md:pb-32 text-white">
      <div className="text-center mb-6 md:mb-10">
        <h1
          className="
          text-3xl text-white font-bold  md:text-5xl text-center "
        >
          Our Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Project01 />
        <Project02 />
        {/* <Project03 /> */}
      </div>
    </div>
  );
};

export default Project;
