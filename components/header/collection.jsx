
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ImgBaseUrl } from "@/lib/utils";
const getCollection = async () => {
    const res = await fetch("https://www.theoutmaker.com/api/get/collection/all");
    return res.json();
}
const Collection = async () => {
    const list = await getCollection();
    return (
        <div className="mt-8">
            <Carousel>
                <CarouselContent>
                    {list.Collections.map(collection => {
                        return <CarouselItem className="basis-1/5">
                            <div className=" pb-6 space-y-[16px] text-primary border border-gray-50 p-3 rounded duration-500 transition-all hover:bg-slate-400 hover:text-white">
                                <Link
                                    href={`collection-product/${collection.collection_id}/${collection.collection_name}`}
                                    className="text-xl md:text-2xl lg:text-3xl"
                                >
                                    <div>
                                        <img
                                            src={ImgBaseUrl(collection.collection_pic) + "?width=600"}
                                            alt="IMAGE"
                                            className=" h-48 rounded object-cover"
                                        />
                                    </div>
                                    {collection.collection_name}
                                    <p className="text-xs line-clamp-2">
                                        {collection.collection_desc}
                                    </p>
                                </Link>
                            </div>
                        </CarouselItem>
                    })}
                </CarouselContent>
                <CarouselPrevious className="translate-x-12 -translate-y-16" />
                <CarouselNext className="-translate-x-12 -translate-y-16" />
            </Carousel>


        </div>
    )
}
export default Collection;