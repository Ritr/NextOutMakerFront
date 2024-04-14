import logo from "@/public/icons/logo-white.png";
import facebook from "@/public/icons/facebook.png";
import x from "@/public/icons/x.png";
import ins from "@/public/icons/ins.png";
import visa from "@/public/icons/visa.svg";
import paypal from "@/public/icons/paypal1.svg";
import express from "@/public/icons/express.svg";
import mastercard from "@/public/icons/mastercard.svg";
import JCB from "@/public/icons/JCB.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-[#262F3C] text-white">
            <div className="w-full lg:w-[1600px] mx-auto pt-10 px-8 md:px-10 md:pt-20">
                <div className="flex flex-col lg:flex-row justify-between  lg:space-y-0 pb-10">
                    <div className="lg:w-2/5 flex flex-col lg:flex-row justify-between ">
                        <div className="hidden md:block">
                            <Link href="/">
                                <div>
                                    <img src={logo.src} alt="" className="w-28 ml-4" />
                                </div>
                            </Link>
                            <div className="md:flex justify-start space-x-3 md:pb-28">
                                <a
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/theoutmaker/"
                                    title="Facebook"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        className="w-8 h-8 bg-[#222A36] rounded-full p-2 fill-current"
                                    >
                                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="https://www.pinterest.com.au/outmakerau/"
                                    title="Pinterest"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 bg-[#222A36] rounded-full p-2 fill-current"
                                    >
                                        <path d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.739 3.739 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.861 2.861 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.988 9.988 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903z"></path>
                                    </svg>
                                </a>

                                <a
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/outmaker_furniture/"
                                    title="Instagram"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        className="w-8 h-8 bg-[#222A36] rounded-full p-2 fill-current"
                                    >
                                        <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden mb-6">
                            <Link href="/">
                                <div className="flex items-center">
                                    <img src={logo.src} alt="" className="w-28 mr-3" />
                                </div>
                            </Link>
                        </div>

                        <div className="w-full lg:w-3/5 text-white rounded-lg">
                            <h3 className="text-md md:text-lg md:font-medium text-left mb-4">
                                Newsletter Signup
                            </h3>
                            <p className="text-xs md:text-sm text-left mb-4">
                                Subscribe to our newsletter and get 10% off your first purchase
                            </p>
                            <form
                                className="flex flex-col items-left"
                            >
                                <input
                                    type="text"
                                    name="ns_email"
                                    placeholder="Your email address"
                                    className="pl-2 pr-8 py-2 w-full rounded-md text-gray-700 text-left text-sm md:text-base"
                                />

                                <label className="inline-flex items-center my-3">
                                    <input
                                        type="checkbox"
                                        name="agreement"
                                        className="form-checkbox h-3 w-3 md:h-5 md:w-5 text-blue-600 "
                                    />
                                    <span className="ml-2 text-2xs md:text-base">
                                        I agree with the &nbsp;
                                        <Link
                                            href="/TermsOfService"
                                            className="text-blue-300 hover:text-blue-400"
                                        >
                                            terms and conditions
                                        </Link>
                                    </span>
                                </label>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base md:font-bold py-2 px-8 rounded-full mt-4 md:mt-0"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-end lg:space-y-0 pb-10 mt-12 md:mt-0">
                        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-3 lg:gap-y-8 lg:w-full pb-10">
                            <div className=" space-y-3">
                                <h3 className=" font-medium  text-sm md:text-base">
                                    Quick Link
                                </h3>
                                <ul className="space-y-1 text-2xs md:text-sm font-light  leading-loose">
                                    <li className="">
                                        <Link href="/AboutUs">About us</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/ContactUs">Contact us</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/all-blogs">Blogs</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/Care">Care & Maintenance</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className=" font-medium text-sm  md:text-base">
                                    Our Policies
                                </h3>
                                <ul className="space-y-1 text-2xs md:text-sm font-light  leading-loose">
                                    <li className="">
                                        <Link href="/TermsOfService">Terms of Service</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/PrivacyPolicy">Privacy Policy</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/ShippingPolicy">Shipping and Delivery</Link>
                                    </li>

                                    <li className="">
                                        <Link href="/ReturnPolicy">Refund Policy</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/FAQ">Frequently Asked Questions</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/Intellectual">Intellectual Property Rights</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className=" font-medium  text-sm md:text-base">
                                    Contact Info
                                </h3>
                                <ul className="space-y-1 text-2xs md:text-sm font-light  leading-loose">
                                    <li className="">
                                        <a>
                                            +61483966676
                                        </a>
                                    </li>
                                    <li className="py-1">
                                        <a>contact@theoutmaker.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <input type="checkbox" checked onClick={handleCheckboxChange} /> */}
                        <div className="md:hidden mb-4">
                            <details className="collapse collapse-arrow rounded-none">
                                <summary className="collapse-title font-medium py-4 min-h-8 border-b  border-[#BFBFBF] px-0">
                                    Quick Link
                                </summary>
                                <div className="collapse-content px-0">
                                    <ul className="space-y-1 text-sm font-light leading-6 pt-4">
                                        <li className="">
                                            <Link href="/AboutUs">About us</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/ContactUs">Contact us</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/all-blogs">Blogs</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/Care">Care & Maintenance</Link>
                                        </li>
                                    </ul>
                                </div>
                            </details>

                            <details className="collapse collapse-arrow rounded-none">
                                <summary className="collapse-title font-medium  py-4  min-h-8 border-b  border-[#BFBFBF] px-0">
                                    Our Policies
                                </summary>
                                <div className="collapse-content px-0">
                                    <ul className="space-y-1 text-sm  pt-4   font-light  leading-6">
                                        <li className="">
                                            <Link href="/TermsOfService">Terms of Service</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/PrivacyPolicy">Privacy Policy</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/ShippingPolicy">Shipping and Delivery</Link>
                                        </li>

                                        <li className="">
                                            <Link href="/RefundPolicy">Refund Policy</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/FAQ">Frequently Asked Questions</Link>
                                        </li>
                                        <li className="">
                                            <Link href="/Intellectual">Intellectual Property Rights</Link>
                                        </li>
                                    </ul>
                                </div>
                            </details>

                            <details className="collapse collapse-arrow rounded-none">
                                <summary className="collapse-title font-medium  py-4 min-h-8 border-b  border-[#BFBFBF] px-0">
                                    Contact Info
                                </summary>
                                <div className="collapse-content px-0">
                                    <ul className="space-y-1 text-sm font-light pt-4  leading-6">
                                        <li className="">
                                            <a>
                                                +61483966676
                                            </a>
                                        </li>
                                        <li>
                                            <a>contact@theoutmaker.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                        <div className="md:hidden flex items-center gap-3">
                            <a
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/outmaker_furniture/"
                                title="Instagram"
                            >
                                <img src={ins.src} className="w-6" alt="" />
                            </a>

                            <a
                                rel="noopener noreferrer"
                                href="https://www.pinterest.com.au/outmakerau/"
                                title="Pinterest"
                            >
                                <img src={x.src} className="w-6" alt="" />
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/theoutmaker/"
                                title="Facebook"
                            >
                                <img src={facebook.src} className="w-6" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pb-10 ">
                    <div className="flex gap-4 flex-col md:flex-row justify-between items-center bg-[#222A36] p-2 rounded">
                        <div className="basis-1/2">
                            <p className="text-xs">@ 2023, OUTMAKER All Right Reserved</p>
                        </div>
                        <div className="flex gap-1 basis-1/2 justify-end items-center">
                            <span className="text-xs">Payment Methods</span>
                            <img src={visa.src} alt="" className="w-[40px]" />
                            <img src={express.src} alt="" className="w-[40px]" />
                            <img src={paypal.src} alt="" className="w-[40px]" />
                            <img src={mastercard.src} alt="" className="w-[40px]" />
                            <img src={JCB.src} alt="" className="w-[40px]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
