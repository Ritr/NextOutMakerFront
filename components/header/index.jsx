
import { FaAngleDown } from "react-icons/fa6";
import Collection from "./collection";

const Header = async () => {
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start flex relative gap-6">
                <div className="dropdown dropdown-hover static">
                    <div tabIndex="0" role="button" className="flex gap-1 items-center group">
                        Collection
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu  bg-base-100 w-[1600px]">
                        <Collection/>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover static">
                    <div tabIndex="0" role="button" className="flex gap-1 items-center group">
                        Products
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover static">
                    <div tabIndex="0" role="button" className="flex gap-1 items-center group">
                        Learn
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover static">
                    <div tabIndex="0" role="button" className="flex gap-1 items-center group">
                        Design Help
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="items-center flex gap-1 items-center-ghost text-xl">daisyUI</a>
            </div>

            <div className="navbar-end">
                <a className="btn flex gap-1 items-center">Button</a>
            </div>
        </div>
    )
}
export default Header;