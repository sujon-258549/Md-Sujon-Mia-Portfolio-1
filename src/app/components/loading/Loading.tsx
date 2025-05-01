import "./style.css";

const Loading = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10 top-0 right-0"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10 bottom-0 left-0"></div>

      <div className="loader-container flex gap-4">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
