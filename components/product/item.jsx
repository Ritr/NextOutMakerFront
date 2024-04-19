import { ImgBaseUrl } from "@/lib/utils";
import { MdOutlineDiscount } from "react-icons/md";
import { TbHexagonNumber5, TbWash } from "react-icons/tb";
import { IoUmbrellaOutline } from "react-icons/io5";

const Item = ({ product }) => {
    return (
        <div className="shadow overflow-hidden">
            <div className="flex items-center gap-1 p-4 font-bold text-red-500 mb-8">
                <MdOutlineDiscount className="text-xl" /> 30%OFF
            </div>
            <img className="w-full cursor-pointer transform transition duration-300 hover:scale-105" src={ImgBaseUrl(product.product.p_pic)} alt={product.product.p_name} />
            <div className="p-4 mt-8">
                <p className="text-lg font-bold text-black">{product.product.p_name}</p>
                <p className="text-xl font-bold text-red-500 mt-1">A${product.price[0].product_regular_price}</p>
                <div className="flex gap-2 mt-1">
                    <div className="p-1 flex gap-1 items-center border border-black rounded-sm text-sm"><TbHexagonNumber5 className="text-xl" />Year Warranty</div>
                    <div className="p-1 flex gap-1 border border-black rounded-sm text-sm"><IoUmbrellaOutline className="text-xl" />Waterproof</div>
                    <div className="p-1 flex gap-1 border border-black rounded-sm text-sm"><TbWash className="text-xl" />sunbrella washable</div>

                </div>
            </div>

        </div>
    );
}
export default Item;