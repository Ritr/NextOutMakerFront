
import { FaAngleDown } from "react-icons/fa6";
import Collection from "./collection";
import Category from "./category";
import Learn from "./learn";
import DesignHelp from "./designHelp";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const Header = async () => {
    return (
        <div className="navbar bg-base-100 p-0 items-stretch px-4 md:px-0">
            <div className="navbar-start hidden md:flex relative gap-6 ">

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
                        <DesignHelp />
                    </ul>
                </div>

            </div>
            <div className="navbar-start md:hidden">

                <label className="swap swap-rotate text-3xl ">
                    <input type="checkbox" className="peer" />
                    <div className="swap-on"><IoCloseSharp /></div>
                    <div className="swap-off"><IoMenuSharp /></div>
                    <div className="absolute top-[100%] shadow-lg origin-top transition-all  duration-200 ease-in-out  z-[1]  opacity-0 scale-95 peer-checked:opacity-100 peer-checked:scale-100 pointer-events-none peer-checked:pointer-events-auto">
                        xxxxxx
                    </div>
                </label>
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