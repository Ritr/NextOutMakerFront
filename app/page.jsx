import VideoPlayer from "@/components/videoPlayer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Collection from "@/components/home/collection";
import Stylish from "@/components/home/stylish";
import Environment from "@/components/home/environment";
import Materials from "@/components/home/materials";
export default function () {
  return (
    <div>
      <div className="relative  h-[50vh]  md:h-[100vh]">
        <VideoPlayer url="https://outmaker.b-cdn.net/assets/home/home1.mp4"></VideoPlayer>
        <div className="text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="max-w-full pb-32">
            <h1 className="text-4xl md:text-5xl text-white font-medium">
              Nature's Touch for Your Outdoors
            </h1>
            <p className="py-6 text-white">
              Where Comfort Meets the Great Outdoors
            </p>
            <Link href="/product-details/1474/Femshade-Outdoor-3-Seater-Sofa-Set">
              <button className="btn btn-primary bg-white text-primary hover:text-white border-0 rounded-full capitalize font-medium">
                Shop Now <BsArrowRight className="ms-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* popular collection */}
      <Collection />
      <Stylish />
      <Environment/>
      <Materials/>
    </div>
  );
}
