import "./project.css";
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
      <div>
        <div className="card">
          <div className="card-image"></div>
          <p className="card-title">Card title</p>
          <p className="card-body">
            Nullam ac tristique nulla, at convallis quam. Integer consectetur mi
            nec magna tristique, non lobortis.
          </p>
          <p className="footer">
            Written by <span className="by-name">John Doe</span> on{" "}
            <span className="date">25/05/23</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
