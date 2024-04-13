import VideoPlayer from "@/components/videoPlayer";
import { ImgBaseUrl } from "@/lib/utils";

const Stylish = () => {
  return (
    <section className="w-full mx-auto  md:pt-10 md:pb-20  relative stylish">
      <div className="text-center pb-4 mt-1">
        <h2 className="text-primary font-medium text-2xl md:text-4xl">
          Modular splicing design makes outdoor space more flexible
        </h2>
      </div>
      <div className="w-full  h-[50vh] md:h-[100vh] ">
        <VideoPlayer url={ImgBaseUrl("assets/home/home2.mp4")} />
      </div>
    </section>
  );
};

export default Stylish;
