
import img1 from "@/public/Materials/Teak.webp";
import img2 from "@/public/Materials/Aluminum.webp";
import img3 from "@/public/Materials/Rattan.webp";
import img4 from "@/public/Materials/Sunbrella.webp";
import imgs2 from "@/public/stylish/2.jpg";
import imgs3 from "@/public/stylish/3.jpg";
import imgs4 from "@/public/stylish/4.jpg";
import { ImgBaseUrl } from "@/lib/utils";
import VideoPlayer from "@/components/videoPlayer";

const materials = [
  {
    id: 1,
    title: "Teak Wood",
    description:
      "Teak wood is a timeless favorite for outdoor furniture. Its naturally tough and resistant to decay. Teak wood contains oils that keep it safe from water damage, pesky insects and rot. As it ages, teak develops an stunning silver-gray patina, adding character while extending its life.",
    image: img1.src,
  },
  {
    id: 2,
    title: "Aluminum",
    description:
      "Aluminum frames are another essential ingredient in our outdoor furniture. Its light rust-resistant and incredibly strong. Our aluminum frames are coated with an special powder to offer extra protection against the elements. This ensures that they remain robust and rust-free.",
    image: img2.src,
  },
  {
    id: 3,
    title: "PE Rattan",
    description:
      "Our PE Rattan mimic the look of rattan but its far more durable. It laughs in the face of UV exposer, moisture, fading, cracking and peeling. With minimal maintenance, our PE Rattan furniture retain its beauty year after year.",
    image: img3.src,
  },
  {
    id: 4,
    title: "Sunbrella Fabrics",
    description:
      "Our outdoor cushions use High-Performance Sunbrella Fabrics. These fabrics are water-resistant, fade-resistant and easy to clean. They stand up to the elements and provide a comfortable seating without the worry of mildew or color fading.",
    image: img4.src,
  },
];
const MV = ({ text_h2, text_p, url }) => {
  return (
    <div className="hero relative">
      <div className="video-wrapper w-full h-full">
        <div className="w-full h-[50vh] md:h-[100vh] object-cover lg:object-cover wow fadeInUp">
          <VideoPlayer url={url}></VideoPlayer>
        </div>
      </div>
      <div className="hero-content text-center">
        <div className="max-w-full pb-32">
          <h2 className="text-base md:text-5xl text-white font-medium uppercase">
            {text_h2}
          </h2>
          <p className="py-6 text-white">{text_p}</p>
        </div>
      </div>
    </div>
  );
};
const Materials = () => {
  const getRandomDuration = () => {
    return (Math.random() * (1.5 - 0.3) + 0.3).toFixed(2); // 生成介于 0.3 到 1.2 之间的随机数
  };

  return (
    <section className="py-10 md:py-20  px-4 md:px-0">
      <div className="w-full ">
        <div className="text-left pb-4 mt-1">
          <h2 className="text-primary font-medium text-2xl md:text-4xl">
            Our Product Designer
          </h2>
        </div>

        <img
          src="https://outmaker.b-cdn.net/assets/1710146514821.webp"
          alt=""
          className="hidden w-full md:inline-block wow slideInLeft"
        />
        <img
          src={imgs2.src}
          alt=""
          className="inline-block w-full md:hidden wow slideInLeft"
        />
        <div className="flex mt-3 md:hidden justify-between gap-3  wow slideInLeft">
          <div className="flex-1 bg-[#F5F5F5]">
            <img src={imgs3.src} alt="" className="w-full h-30 object-cover" />
            <div className="p-3">
              <div className="text-center text-base font-medium mb-3">
                Furniture designer
              </div>
              <div className="text-xs mb-4">
                He is a renowned designer, artist, and creative directorin
                Mexico, leading the design industry. He has servedas the founder
                and CEO of PANOR Á MICA, the creativedirector of NONO, and the
                CEO and founder of joelEscalona Studio.
              </div>

            </div>
          </div>
          <div className="flex-1 bg-[#F5F5F5]">
            <img src={imgs4.src} alt="" className="w-full h-30 object-cover" />
            <div className="p-3">
              <div className="text-center text-base font-medium mb-3">
                Furniture designer
              </div>
              <div className="text-xs mb-4">
                He is a renowned designer, artist, and creative directorin
                Mexico, leading the design industry. He has servedas the founder
                and CEO of PANOR Á MICA, the creativedirector of NONO, and the
                CEO and founder of joelEscalona Studio.
              </div>

            </div>
          </div>
        </div>
        <div className="text-center w-4/5 md:w-2/3 mx-auto mt-5">
          <h2 className="text-primary font-medium mt-5 text-2xl md:text-4xl">
            Materials We Use
          </h2>
          <p className="text-[#666666] text-sm font-normal leading-7 pt-4">
            At The Outmaker, we're proud to offer environmentally friendly
            furniture. Just like you, we care about nature, and our pieces are
            crafted with sustainability in mind, providing you with beautiful,
            eco-conscious options for your space. Say goodbye to limited choices
            and high mark-ups!
          </p>
        </div>
        <br></br>

        <MV
          url={ImgBaseUrl("assets/home/home3.mp4")}
          text_h2="Built to withstand everything life throws at us."
          text_p="Where Durability Embraces the Elements"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 pt-10 mb-14">
          {materials.slice(0, 4)?.map((material) => (
            <div
              key={material?.id}
              className="container mx-auto px-2 pt-2 md:pb-4 md:border bg-white max-w-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:scale-105 wow fadeInUp"
              data-wow-duration={`${getRandomDuration()}s`}
            >
              <div className="h-auto md:h-[280px]">
                <img
                  className="rounded-lg object-fill w-full h-full"
                  src={material?.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-base md:text-xl py-1 text-primary font-medium">
                    {material?.title}
                  </h2>
                  <p className="hidden md:block text-xs font-normal">
                    {material?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <MV
          url={ImgBaseUrl("assets/home/home4.mp4")}
          text_h2="Sunbrella fabric easily handles various cold weather conditions."
        />
      </div>
    </section>
  );
};

export default Materials;
