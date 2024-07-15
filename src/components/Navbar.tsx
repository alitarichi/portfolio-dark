import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="py-4">
        <Image src={logoImage} alt="Saas logo" className="h-12 w-12" />
      </div>
    </div>
  );
};
