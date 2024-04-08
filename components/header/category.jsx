import Link from 'next/link';
import { ImgBaseUrl } from "@/lib/utils";

const getCategory = async () => {
    const res = await fetch("https://theoutmaker.com/api/get/category/all");
    return res.json();
}
const Category = async () => {
    const list = await getCategory();
    return (
        <div className="grid grid-cols-5 gap-8 mt-8 pb-8">
            {list.Categories.map((item) => {
                return <div>
                    <Link href={`category-product/${item.category_id}/${item.category_url}`}>
                        <div className=" rounded-sm border border-gray-50 group">
                            <img src={ImgBaseUrl(item.category_pic) + "?width=300"} alt={item.name} className="md:h-[120px] h-auto object-contain mx-auto group-hover:scale-110  duration-200" />
                            <p className=" mt-2 text-sm py-2 text-center md:text-lg text-gray-500 md:text-black group-hover:font-semibold">
                                {item.category_name}
                            </p>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    )
}
export default Category;