import img2 from "@/public/Network/2.jpg";
import img5 from "@/public/Network/5.jpg";
import img6 from "@/public/Network/6.jpg";
import img7 from "@/public/Network/7.jpg";
import img8 from "@/public/Network/8.jpg";
import img9 from "@/public/Network/9.jpg";
import img10 from "@/public/Network/10.jpg";
import img11 from "@/public/Network/11.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
const Network = () => {

    const networkImages = [img8, img7, img9, img10, img2, img11, img5, img6];
    const getRandomDuration = () => {
        return (Math.random() * (1.5 - 0.3) + 0.3).toFixed(2); // 生成介于 0.3 到 1.2 之间的随机数
    };
    return (
        <section className="w-full  px-4 md:px-0">
            <h2 className="text-primary text-2xl md:text-4xl font-semibold pb-3">
                Outmaker Instagram Network
            </h2>
            <div className="md:hidden mb-4">
                <Carousel>
                    <CarouselContent>
                        {networkImages.map((imgSrc, index) => (
                            <CarouselItem>
                                <div
                                    key={index}
                                    className="w-full px-1 wow fadeInUp"
                                    data-wow-duration={`${getRandomDuration()}s`}
                                >
                                    <img
                                        src={imgSrc.src}
                                        alt="Network Image"
                                        className="w-full h-[21rem] object-cover"
                                        loading="lazy"
                                    />
                                    <a
                                        href="https://instagram.com/outmaker_furniture?igshid=bTVxM3JzZ2g4cmUy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0"
                                    ></a>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto-fit gap-5 relative">
                {networkImages.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="w-full wow fadeInUp rounded-md"
                        data-wow-duration={`${getRandomDuration()}s`}
                    >
                        <img
                            src={imgSrc.src}
                            alt="Network Image"
                            className="w-full h-[16rem] object-cover rounded-md"
                        />
                        <a
                            href="https://instagram.com/outmaker_furniture?igshid=bTVxM3JzZ2g4cmUy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0"
                        ></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Network;
