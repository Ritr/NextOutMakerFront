import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillStar } from "react-icons/ai";
import img1 from "@/public/review/review1.png";
import img2 from "@/public/review/review2.png";
import img3 from "@/public/review/review3.png";
import img4 from "@/public/review/review4.png";
import img5 from "@/public/review/review5.png";
import img6 from "@/public/review/review6.png";

const reviews = [
  {
    id: 1,
    name: "Emily Turner",
    description:
      "The Outmaker truly enhances outdoor living. Their range of furniture reflects the Australian spirit. I'm delighted with the quality and style of my recent purchase - an outdoor dining set that's both durable and stylish. ",
    image: img1,
    date: "10 Aug 2022",
    post: "Interior Designer",
  },
  {
    id: 2,
    name: "Mark Dawson",
    description:
      "I can't stop raving about The Outmaker's comfy and stylish outdoor seating. My family loves our 3 Seater Sofa Set, perfect for long Aussie summer evenings. ",
    image: img2,
    date: "20 Jun 2023",
    post: "Landscape Architect",
  },
  {
    id: 3,
    name: "Grace Mitchell",
    description:
      "Kudos to The Outmaker's sustainability efforts. My outdoor furniutre and garden sofa set are both luxurious and environmentally friendly. It's a win-win for my garden and the planet. ",
    image: img3,
    date: "23 Feb 2023",
    post: "Environmental Consultant",
  },

  {
    id: 4,
    name: "Daniel Clark",
    description:
      "The Outmaker's Rattan, Aluminum, Teack's chairs add a laid-back charm to my outdoor setup. They're not only durable but also great in the Aussie heat, making my barbecues even better.",
    image: img4,
    date: "25 Dec 2022",
    post: "Outdoor Lifestyle Blogger",
  },
  {
    id: 5,
    name: "Lisa Parker",
    description:
      "I've always adored leather, and The Outmaker's leather sofa is no exception. The natural texture and durability make it a standout piece in my outdoor space.",
    image: img5,
    date: "11 Sep 2023",
    post: "Exterior Stylist",
  },
  {
    id: 6,
    name: "Lucas Foster",
    description:
      "Chenille is the way to go for relaxation, and The Outmaker's range is fantastic. My chenille accent chair is now my favorite spot for unwinding.",
    image: img6,
    date: "21 May 2023",
    post: "Home Decor Enthusiast",
  },
];
const Review = () => {
  const getRandomDuration = () => {
    return (Math.random() * (1.5 - 0.3) + 0.3).toFixed(2); // 生成介于 0.3 到 1.2 之间的随机数
  };
  return (
    <section className="w-full pb-10 md:mt-10 px-4 md:px-0">
      <div className="flex justify-between items-center mb-1">
        <div className="">
          <h1 className="text-2xl md:text-4xl font-medium text-primary">
            Our Customers Reviews
          </h1>
        </div>
      </div>
      <Carousel className="" options={{ algin: "start" }}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem  className="basis-2/3 md:basis-1/4">
              <div className="flex" key={review.id}>
                <div
                  className="rounded-lg border-2  border-[#F2F2F2]  shadow hover:shadow-xl  wow slideInRight"
                  data-wow-duration={`${getRandomDuration()}s`}
                >
                  <div className="flex flex-col w-full h-auto min-h-[350px] justify-between p-2 md:p-8  hover:border-white">
                    <div className="flex  w-full flex-col justify-between items-center">
                      <div className="flex w-full justify-between">
                        <div className="flex text-white">
                          <AiFillStar
                            className="bg-[#F1AB3E] p-1 me-1"
                            size={24}
                          />
                          <AiFillStar
                            className="bg-[#F1AB3E] p-1 me-1"
                            size={24}
                          />
                          <AiFillStar
                            className="bg-[#F1AB3E] p-1 me-1"
                            size={24}
                          />
                          <AiFillStar
                            className="bg-[#F1AB3E] p-1 me-1"
                            size={24}
                          />
                          <AiFillStar
                            className="bg-[#F1AB3E] p-1 me-1"
                            size={24}
                          />
                        </div>
                        <p className="text-base font-normal text-[#666666]">
                          {review.date}
                        </p>
                      </div>

                      <p className="my-4 mb-0 text-xs font-normal leading-relaxed tracking-wide text-[#666666]">
                        {review.description}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="h-10 w-10 mr-3 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                        <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                          <img
                            alt=""
                            src={review.image.src}
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            className="inline-block "
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="leading-relaxed tracking-wide text-[#151414] text-sm font-medium">
                          {review.name}
                        </p>
                        <p className="text-sm font-normal leading-relaxed tracking-wide text-[#666666]">
                          {review.post}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious  className="translate-x-3" />
        <CarouselNext className="-translate-x-3" /> */}
      </Carousel>
    </section>
  );
};

export default Review;
