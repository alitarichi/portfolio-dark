export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]">
      <div className="container">
        <div className=" flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span>Version 2.0 is here</span>
            <span>Read More</span>
          </a>
        </div>
        <h1>One Task at a Time</h1>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <button>Get for free</button>
      </div>
    </div>
  );
};
