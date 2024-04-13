
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { getCollection } from "@/api/collection";
import { ImgBaseUrl } from "@/lib/utils";

const Collection = async () => {
    const { Collections } = await getCollection();
    const getRandomDuration = () => {
        return (Math.random() * (1.5 - 0.3) + 0.3).toFixed(2); // 生成介于 0.3 到 1.2 之间的随机数
    };
    const Item = ({ collection }) => {
        return <div
            key={collection?.collection_id}
            className="block group items-center justify-between rounded-md my-2 lg:mt-[38px] md:pb-6"
            data-wow-duration={`${getRandomDuration()}s`}
        >
            <img
                className="img w-full h-full object-cover lg:h-[375px] md:mb-6 rounded-md group-hover:scale-105  duration-300"
                src={ImgBaseUrl(collection?.collection_pic)}
                alt=""
                loading="lazy"
            />
            <div className="flex justify-between items-center text-xl font-medium">
                {collection?.collection_name}
                <span className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Shop <BsArrowRight className="ms-2" />
                </span>
            </div>
            <div className="text-sm hidden md:block">
                {collection?.collection_desc}
            </div>
        </div>
    }
    return (
        <section className="w-full pt-10 pl-5 pr-5 md:py-20">
            <div>
                <div className="flex justify-between items-center">
                    <div className="basis-2/3">
                        <h1 className="text-2xl md:text-4xl font-medium text-primary">
                            Our Popular Collection
                        </h1>
                    </div>
                    <Link
                        href="/collections"
                        className="flex items-center text-primary text-sm font-medium cursor-pointer justify-end text-end"
                    >
                        View All
                        <BsArrowRight className="ms-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {Collections?.slice(0, 8).map((collection) => (
                        <Link
                            href={`/collection-product/${collection.collection_id}/${collection.collection_name}`}
                            key={collection.collection_id}
                        ><Item collection={collection}></Item>
                        </Link>
                    ))}
                    {
                        <Link
                            className="sm:hidden md:inline"
                            href={`/collection-product/${Collections[8].collection_id}/${Collections[8].collection_name}`}
                            key={Collections[8].collection_id}
                        ><Item collection={Collections[8]}></Item>
                        </Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default Collection;
