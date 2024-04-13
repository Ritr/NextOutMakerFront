
import { FaAngleDown } from "react-icons/fa6";
import Collection from "./collection";
import Category from "./category";
import Learn from "./learn";
import DesignHelp from "./designHelp";
const Header = async () => {
    return (
        <div className="navbar bg-base-100 p-0 items-stretch">
            <div className="navbar-start flex relative gap-6 ">
                <div className="h-full dropdown dropdown-hover static group flex items-center">
                    <div role="button" className="flex gap-1 items-center">
                        Collection
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-200 ease-in-out"></FaAngleDown>
                    </div>
                    <ul className="top-[100%] shadow-lg origin-top transition-all absolute duration-200 ease-in-out  z-[1] bg-base-100 w-[1600px] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
                        <Collection />
                    </ul>
                </div>

                <div className="h-full dropdown dropdown-hover static flex items-center">
                    <div role="button" className="flex gap-1 items-center group">
                        Products
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul className="top-[100%] shadow-lg dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <Category />
                    </ul>
                </div>

                <div className="h-full dropdown dropdown-hover static flex items-center">
                    <div role="button" className="flex gap-1 items-center group ">
                        Learn
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul className="top-[100%] shadow-lg dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <Learn />
                    </ul>
                </div>

                <div className="h-full dropdown dropdown-hover static flex items-center">
                    <div role="button" className="flex gap-1 items-center group">
                        Design Help
                        <FaAngleDown className="group-hover:rotate-180 transition-all duration-300 ease-in-out"></FaAngleDown>
                    </div>
                    <ul className="top-[100%] shadow-lg dropdown-content z-[1] menu  bg-base-100 w-[1600px] absolute left-0">
                        <DesignHelp/>
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