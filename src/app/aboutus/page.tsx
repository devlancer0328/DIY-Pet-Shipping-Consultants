"use client";

export default function Aboutus() {
    return (
        <section id="aboutus" className="w-full dark:text-black flex flex-col justify-center relative  h-content items-center px-12 md:p-10">
            <div className="w-full">
                <div className="pb-10 text-center items-center w-full">
                    <p className="text-5xl text-black">About <span className="text-[#4878D0]"> Us</span></p>
                </div>
            </div>
            <div className="w-full max-w-[1440px] rounded-tr-[50px] md:rounded-3xl bg-[#E5E7EB] flex items-center text-center gap-12">
                <div className=" pl-10 w-full lg:w-3/5 text-center md:text-left">
                    <div className="box-border">
                        <ul className="relative">
                            <li className="flex w-full flex-col-reverse md:flex-row gap-8">
                                <div className="flex w-full flex-col">
                                    <div className="text-4xl">Who <span className="text-[#4878D0]">we are</span>
                                    </div>
                                    <div>
                                        <div className="relative mt-3 text-lg leading-6 mb-0">
                                            <div className="text">I&apos;m Lea and this is my husband Neil. We&apos;re a US-based family-owned company. Our family has been transporting pets both domestically and internationally for years. We&apos;re happy to bring that knowledge and insight to you.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block lg:hidden w-full px-4">
                                    <img src="/assets/home/aboutus.jpg" />
                                </div>
                            </li>
                            <li>
                                <div className=" text-4xl mt-6">Why<span className="text-[#4878D0]"> this service?</span>
                                </div>
                                <div>
                                    <div className="relative mt-3 text-lg leading-6 mb-0">
                                        <div className="text">Our DIY service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service pet transport company. With DIY Pet Shipping, we empower YOU to handle the reins of your pet’s transport thereby saving hundreds, if not thousands of dollars.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className=" text-4xl mt-6">What <span className="text-[#4878D0]"> we offer:</span>
                                </div>
                                <div>
                                    <div className="relative mt-3 text-lg leading-6 mb-0">
                                        <div className="text">We offer an easy, customized DIY Pet Transport Guide based on you or your pet’s move. This means if you have a Labrador and you’re flying from New York to Europe, we’ll provide the how-to steps of your pet’s move. The guide provides clear-cut, simple instructions and options and walks you through the requirements for your destination. We offer this for over 200 countries.</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:block w-full lg:w-2/5">
                    <img src="/assets/home/aboutus.jpg" className="rounded-tr-[50px] md:rounded-3xl" />
                </div>
            </div>
        </section>
    )
}