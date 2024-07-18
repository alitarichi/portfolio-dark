import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <h2>Intuitive interface</h2>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your
          progress
        </p>
        <Image src={appScreen} alt="product screenshot" />
      </div>
    </div>
  );
};
