"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import "swiper/css";
import "swiper/css/pagination"
import "react-multi-carousel/lib/styles.css";


export default function Home() {



  return (
    <>
      <main>
        <div id="home" className=" absolute top-0 w-0" />
        <section className="text-white h-screen w-full max-md:px-5">
          <div className="absolute inset-0 w-full bg-[url(/assets/home/background.png)] bg-cover bg-center h-screen"></div>
          <div className="absolute inset-0 w-full h-screen flex flex-col items-center justify-center text-center">
            <h1 className="animate-fade-right animate-once transition-all animate-ease-linear relative mt-40 text-8xl text-pretty tracking-wider leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              DIY Pet Shipping
            </h1>
            <p className="animate-fade-up transition-all animate-ease-linear animate-normal animate-fill-forwards relative mt-20 text-5xl text-pretty max-md:max-w-full">
              Guiding Your Pet’s Journey, Every Step of the Way!
            </p>
          </div>
        </section>
        <div className="z-10 pb-10 relative rounded-tr-none md:rounded-tr-brand rounded-bl-none md:rounded-bl-brand acf/reviews bg-tertiary dark:text-black">
          <section className="pt-5">
            <div className="container mx-auto text-center">
              <div className="w-full px-4 md:px-8 lg:px-12 reviews-slider flex justify-center mt-4 md:flex-row flex-col">
                <div className="w-full flex flex-1">
                  <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Daniel Turner                                </h1>
                      </div>
                    </div>
                    <div className="text-left text-sm">
                      <h1 className="font-semibold">
                        &quot;Wonderful to work with&quot;                            </h1>
                      <div className="mt-2 font-thin">
                        <strong><span style={{ fontWeight: "400" }}>“Moving from the U.S. to Germany with our two Labrador Retrievers seemed daunting, but thanks to DIY, the process was seamless. They handled every detail—from ensuring all vaccinations were up to date, to securing the right crates. They even helped us understand Germany’s pet import regulations. Our dogs arrived safely and were happy right from the moment they landed. We can’t thank the team enough for their patience and expertise.!</span></strong><span style={{ fontWeight: "400" }} >”</span>                            </div>
                    </div>
                  </article>
                </div>
                <div className="w-full flex flex-1">
                  <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Rita Hartley                                </h1>
                      </div>
                    </div>
                    <div className="text-left text-sm">
                      <h1 className="font-semibold">
                        “We knew our boys were in excellent hands”                            </h1>
                      <div className="mt-2 font-thin">
                        <p><span style={{ fontWeight: "400" }}>“When our family faced an unexpected relocation, we were most concerned about how our elderly cat would handle the journey. The team at DIY was not only incredibly knowledgeable about the safest travel options but also genuinely caring towards our pet’s needs. They advised us on everything from crate training to the best flight schedules. It was a huge relief to have such expert and compassionate support every step of the way.”</span></p>                 </div>
                    </div>
                  </article>
                </div>
                <div className="w-full flex flex-1">
                  <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Thomas G                                </h1>
                      </div>
                    </div>
                    <div className="text-left text-sm">
                      <h1 className="font-semibold">
                        “The full team was spectacular”                            </h1>
                      <div className="mt-2 font-thin">
                        <strong><span style={{ fontWeight: "400" }}>“I was overwhelmed by the thought of shipping my snake to South America, but DIY went above and beyond to assist us. They were thorough in explaining what kind of crate was needed, how to manage feeding schedules, and even the specifics of temperature control during transit. Their attention to detail and proactive communication made a complicated process much easier. Highly recommend their services for anyone needing to transport exotic pets!</span></strong><span style={{ fontWeight: "400" }}>”</span>                            </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="container mx-auto px-4 pb-16 md:pb-8 md:hidden mt-4">
                <div className="w-full flex items-center justify-between">
                  <div className="w-full md:w-[calc(100%-120px)] flex items-center">
                    <div className="reviews-slider-progress slider-progress-bar">
                      <div className="reviews-slider-progress-inner slider-progress-inner"></div>
                    </div>
                  </div>
                  <div className="w-[100px] justify-end space-x-4 hidden md:flex">
                    <button id="reviewsPrev" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
                      <span className="sr-only">Previous slide</span>
                      <i className="fa fa-chevron-left text-white"></i>
                    </button>
                    <button id="reviewsNext" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
                      <span className="sr-only">Next slide</span>
                      <i className="fa fa-chevron-right text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section >
        </div >
      </main >
    </>
  );
}

export const projects = [
  {
    title: "Destination Paperwork & Requirements ",
    description:
      "A technology company that builds economic infrastructure for the internet."
  },
  {
    title: "Veterinarian Paperwork & Documents Required ",
    description:
      "This includes all veterinarian paperwork and documents your pet(s) will need for your destination."
  },
  {
    title: "Quarantine, Import Permits, Export Permits, Tapeworm Treatment, Parasite Treatment & Bloodwork",
    description:
      "Does your pet need any of these things to get to their destination?"
  },
  {
    title: "Airline Paperwork & Check-In Requirements ",
    description:
      "This is based on the airline and the routing utilized."
  },
  {
    title: "Pet-Friendly Commercial or Private Charter Flights ",
    description:
      "Commercial and Private Charter options."
  },
  {
    title: "In-cabin Flights ",
    description:
      "This is dependent on airline, pet type and pet size."
  },
  {
    title: "Ground Transport Options ",
    description:
      "An alternative option for you & your pet(s)."
  },
  {
    title: "Residential Pick-up / Airport Delivery ",
    description:
      "Need assistance with pick-up and airport check-in?"
  },
  {
    title: "Airport Pick-Up / Residential Delivery",
    description:
      "Need assistance with airport pick-up, customs, or residential delivery? "
  },
  {
    title: "Airline Accepted Crates & Where to Get Them",
    description:
      "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
  },
  {
    title: "Airline Accepted Crates & Where to Get Them",
    description:
      "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
  },
  {
    title: "International or Domestic Document Reviews",
    description:
      "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
  }
];