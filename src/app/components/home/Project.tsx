import { Project01 } from "./project/Project1";
import { Project02 } from "./project/Project2";
import { Project03 } from "./project/Project3";

const Project = () => {
  return (
    <div className="py-12 text-white">
      <div className="text-center mb-10">
        <h1
          className="
          text-3xl text-white font-bold  md:text-5xl text-center "
        >
          Our Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:gridc">
        <Project01 />
        <Project02 />
        <Project03 />
      </div>
    </div>
  );
};

export default Project;
