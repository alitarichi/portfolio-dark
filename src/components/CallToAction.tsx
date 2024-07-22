export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] text-center">
      <h2 className="font-bold text-5xl tracking-tighter">Get istant access</h2>
      <p className="text-xl text-white/70 mt-5">
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>
      <form action="" className="mt-10 flex flex-col gap-2.5">
        <input
          type="email"
          placeholder="your@email.com"
          className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]"
        />
        <button className="bg-white text-black h-12 rounded-lg">
          Get access
        </button>
      </form>
    </div>
  );
};
