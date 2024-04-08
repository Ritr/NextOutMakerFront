import Link from 'next/link';

const Learn = () => {
    return (
        <div className="px-2 pb-8 flex flex-col lg:flex-row mt-8 ">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[100px]">
                {/* first column */}
                <div className="flex flex-col w-full">
                    <div className="grid">
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <div className="space-y-[15px] flex flex-col">
                            <Link href="/AboutUs">Our Shrefry</Link>
                            <Link href="/brand">Sustainability</Link>
                            <Link href="/ContactUs">Contact us</Link>
                            <Link href="/all-blogs">Blogs</Link>
                            <Link href="/Care">Care & Maintenance</Link>
                        </div>
                    </div>
                </div>
                {/* second column */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <div className="space-y-[15px] flex flex-col">
                        <Link href="/ShippingPolicy">Shipping & Delivery</Link>
                        <Link href="/ReturnPolicy">Return & Refunds</Link>
                        <Link href="/FAQ">Frequently Asked Questions</Link>
                    </div>
                </div>
                {/* third column */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Info.</h3>
                    <div className="">
                        <a href="tel:+61483966676" className="mb-4 block">
                            +61483966676
                        </a>
                        <a href="mailhref:kaium@outmaker.com" className="mb-6">
                            contact@theoutmaker.com
                        </a>
                        <p>139 Keys Road, Moorabbin, VIC , Australia </p>
                    </div>
                </div>
                {/* img container */}
            </div>
            <div>
                {/* <img src={navImg} alt="" className="object-fill  w-[550px]" /> */}
            </div>
        </div>
    );
};
export default Learn;