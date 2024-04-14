import img from "@/public/environment.webp";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Environment = () => {
  return (
    <section className="w-full pb-20 pt-10 ">
      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="mb-6 md:mb-0 px-4 md:px-0">
          <h4 className="text-primary text-2xl md:text-4xl font-medium">
            Environment Friendly
          </h4>
          <p className="text-[#666666] text-xs font-normal pt-1 pb-4 md:pt-6 md:pb-6">
            At The Outmaker, we're proud to offer environmentally friendly
            furniture. Just like you, we care about nature, and our pieces are
            crafted with sustainability in mind, providing you with beautiful,
            eco-conscious options for your space. Say goodbye to limited choices
            and high mark-ups!
          </p>
          <Link href="/brand">
            <button className="btn btn-primary rounded-full text-white hover:text-primary hover:bg-white">
              Our Sustainability Efforts <BsArrowRight className="ms-2" />
            </button>
          </Link>
        </div>
        <div className="wow slideInRight">
          <img className="w-full" src={img.src} alt="" loading="lazy"/>
        </div>
      </div>
    </section>
  );
};

export default Environment;
