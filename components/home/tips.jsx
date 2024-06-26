import img1 from "@/public/icons/boxIcon.png";
import img2 from "@/public/icons/badgeIcon.png";
import img3 from "@/public/icons/callIcon.png";
import img4 from "@/public/icons/paymentIcon.png";

const services = [
  {
    id: 1,
    image: img1,
    title: "30 Days Free Returns",
    description: "No questions asked return policy",
  },
  {
    id: 2,
    image: img2,
    title: "Money Guarantee",
    description: "Quick refund",
  },
  {
    id: 3,
    image: img3,
    title: "24/7 Support",
    description: "Friendly 24/7 support",
  },
  {
    id: 4,
    image: img4,
    title: "Secure Payment",
    description: "All cards accepted",
  },
];

const IconSection = () => {
  return (
    <>
      <section className="bg-accent py-10">
        <div className="container mx-auto px-4">
          <div className="grid justify-between grid-cols-2 row-gap-8 md:grid-cols-4 md:divide-x-2 md:divide-dashed">
            {services.map((service, index) => (
              <div key={index} className="text-center p-2 md:p-0">
                <div className="flex items-center justify-center mx-auto mb-3 rounded-full hover:-translate-y-6 duration-500 ease-in-out cursor-pointer">
                  <img
                    src={service.image.src}
                    alt=""
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <h6 className="text-lg font-medium text-[#1D1B1B]">
                  {service.title}
                </h6>
                <p className="text-[#666666] text-xs pt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IconSection;
