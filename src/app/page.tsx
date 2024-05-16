"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import "swiper/css";
import "swiper/css/pagination"
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import background from "../../public/assets/home/background.png"
import { LayoutGrid } from "../components/gallery/gallery";
import dynamic from "next/dynamic";
import emailjs from '@emailjs/browser';
import { env } from "process";

const World = dynamic(() => import("../components/globe/globe").then((m) => m.World), {
  ssr: false,
});

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function Home() {

  const form = useRef<HTMLFormElement>(null);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [speaktime, setSpeaktime] = useState("");
  const [traveldate, setTraveldate] = useState("");
  const [petsnumber, setPetsnumber] = useState("");
  const [petspecies, setPetSpecies] = useState("");
  const [petbreed, setPetBreed] = useState("");
  const [petname, setPetName] = useState("");
  const [petage, setPetAge] = useState("");
  const [petweight, setPetweight] = useState("");
  const [depart, setDepart] = useState("North America");
  const [topart, setTopart] = useState("North America");

  const [openModal, setModal] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const params = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      speaktime: speaktime,
      traveldate: traveldate,
      petsnumber: petsnumber,
      petspecies: petspecies,
      petbreed: petbreed,
      petname: petname,
      petage: petage,
      petweight: petweight,
      depart: depart,
      topart: topart
    }
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (service_id && template_id && public_key) {
      emailjs
        .send(service_id, template_id, params, {
          publicKey: public_key,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            handleModal()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };


  const handleModal = () => {
    setModal(!openModal)
  }

  return (
    <>
      <main>
        <div id="home" className=" absolute top-0 w-0" />
        <section className="bg-[#E5E7EB] items-start px-20  text-white min-h-[883px] max-h-[963px] max-md:px-5">
          <Image
            loading="lazy"
            src={background}
            alt="Hero background"
            className="object-cover absolute inset-0 w-full"
          />
          <div className="flex flex-col items-center left-16 bottom-1/4 absolute">
            <h1 className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-linear relative mt-40 text-8xl text-pretty tracking-wider leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              DIY Pet Shipping
            </h1>
            <p className="animate-fade-up animate-duration-3000 animate-ease-linear animate-normal animate-fill-forwards relative mt-20 text-5xl text-pretty leading-6 max-md:max-w-full">
              Guiding Your Pet’s Journey, Every Step of the Way!
            </p>
          </div>
        </section>
        <section id="aboutus" className=" dark:text-black flex justify-center relative bg-[#E5E7EB] h-[632px] rounded-bl-[150px] scroll-mt-24">
          <div className=" max-w-[1600] ml-36 mr-36 flex flex-wrap items-center text-center">
            <div className="w-full md:w-2/5 lg:w-3/5 px-4 text-center md:text-left lg:pl-12">
              <div className="box-border">
                <ul className="relative">
                  <li>
                    <div className=" text-4xl px-6">Who <span className="text-[#4878D0]">we are</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">We’re a family-owned pet-loving company.</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-4xl px-6 mt-6">Why<span className="text-[#4878D0]"> this service?</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">Our DIY service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service company to ship your pet(s). </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" text-4xl px-6 mt-6">What <span className="text-[#4878D0]"> we offer:</span>
                    </div>
                    <div>
                      <div className="relative px-6 mt-3 text-lg leading-6 mb-0">
                        <div className="text">We offer an easy, customizable DIY solution based on your pet(&apos;s) unique move. This solution is designed to provide clear-cut, simple instructions, and options, and advise you of requirements for your pet(&apos;s) transport. </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/5 px-4 animate-fade-left animate-duration-[2000ms] animate-ease-linear animate-normal animate-fill-forwards">
              <img src="/assets/home/aboutus.jpg" />
            </div>
          </div>
        </section>
        <section id="petTypes" className="px-2 pt-5 w-full h-full scroll-mt-24">
          <div className="w-full"  >
            <div className=" py-5 text-center items-center w-full">
              <p className="text-5xl">Pet <span className="text-[#4878D0]"> Types</span></p>
            </div>
          </div>
          <div className="h-[632px] w-full">
            <LayoutGrid cards={cards} />
          </div>
        </section>
        <section id="destinations" className=" dark:text-black w-full scroll-mt-24">
          <GlobeDemo />
        </section>
        <section id="services" style={{ background: "#" }} className=" pb-20 relative  scroll-mt-24 ">
          <div className="w-full py-14">
            <div className=" text-center items-center w-full">
              <p className="text-5xl">Services <span className="text-[#4878D0]"> We Offer:</span></p>
            </div>
          </div>
          <div className="md:container mx-auto md:px-4 " >
            <div className="w-full rounded-tr-[50px] md:rounded-3xl bg-[#2C3442] overflow-hidden flex flex-col md:flex-row relative">
              <div className="absolute hidden md:block top-0 left-2/3 xl:left-[unset] xl:right-0 pointer-events-none">
                <svg width="579" height="644" viewBox="0 0 579 644" fill="none" xmlns="http://www.w3.org/2000/svg" />
              </div>

              <div className="flex py-24 xl:py-32 px-8 xl:px-32 flex-col w-full md:w-2/3">
                <h1 className="text-white text-3xl heading aos-init aos-animate" data-aos="fade-up">
                  {/* Services <span className="text-[#4878D0]"> We Offer:</span>            </h1> */}
                  Step-by-Step Guide on Shipping Your Pet:       </h1>
                <div className="mt-8">
                  <ul className="flex flex-col space-y-4">
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Destination Requirements - We will advise you on all requirements for your destination.                        </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Veterinarian Requirements – We will advise you on all veterinarian paperwork and documents needed for your destination.                        </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Region Requirements - Quarantine, Import Permits, Export Permits, Tapeworm Treatments, Parasite Treatments, Blood Tests & Vaccines – We&apos;ll advise you on which apply to your move.                        </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Method of Transport - We will advise you on the most appropriate method of transportation for your pet. Options include commercial air travel, charter air travel, ground transportation, or a combination depending on the location and your pet&apos;s needs..                 </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Airline Options, Flight Booking, Paperwork & Checking-In - We will advise you on airline options, how to book your pet(s) flight, airline paperwork needed, where to check-in, the check-in process, and requirements.                        </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Ground Transportation - We will advise whether ground transport will be needed or required based on pet size, temperature, or breed.                         </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Airline Accepted Crates - We will advise the process for choosing a suitable travel crate that meets the requirements of your chosen transportation method and preparing the crate for travel.                       </div>
                    </li>
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="800">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        Additionally – We can advise on extra options such as residential pick-up & airport check-in or airport pick-up & residential delivery if you cannot do so                      </div>
                    </li>
                  </ul>
                </div>
                <h1 className="text-white text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $300 USD </h1>
                <h1 className="text-white text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $150 USD </h1>
                <h1 className="text-white text-3xl mt-10 heading aos-init aos-animate" data-aos="fade-up">
                  Pre-filling Health Certificates:        </h1>
                <div className="mt-8">
                  <ul className="flex flex-col space-y-4">
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        We can assist by providing pre-filled health certificates or forms that meet the specific requirements of the destination country, airline, or transport regulations. This saves time for pet owners and ensures accuracy in documentation.                        </div>
                    </li>
                  </ul>
                </div>
                <h1 className="text-white text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $50 USD </h1>
                <h1 className="text-white text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $25 USD </h1>
                <h1 className="text-white text-3xl mt-10 heading aos-init aos-animate" data-aos="fade-up">
                  Reviewing Veterinarian&apos;s Paperwork:         </h1>
                <div className="mt-8">
                  <ul className="flex flex-col space-y-4">
                    <li className="flex items-start aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="w-5 pt-1 mr-2">
                        <img decoding="async" loading="lazy" className="w-full" alt="Decorative image" src="/assets/svg/small-paw.svg" />
                      </div>
                      <div className="w-full text-base text-white">
                        We can review all documentation provided by the pet owner&apos;s veterinarian to ensure it meets the necessary standards and requirements for travel. This includes verifying vaccination records, health certificates, microchip information, and any other relevant paperwork.                     </div>
                    </li>
                  </ul>
                </div>
                <h1 className="text-white text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $75 USD </h1>
                <h1 className="text-white text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $25 USD </h1>
                <h1 className="text-white text-xl heading aos-init mt-10 aos-animate" data-aos="fade-up">&nbsp;&nbsp;By offering these services, we can help pet owners navigate the often complex paperwork, procedures, and regulatory requirements associated with transporting pets domestically or internationally. <br /> &nbsp;&nbsp;This helps to ensure a smooth and hassle-free experience for both the pets and their owners. </h1>
                <div className={` text-lg cursor-pointer self-center mt-10 `}>
                  <button onClick={handleModal} className="text-black bg-[#c7d7f5] hover:bg-[rgb(146,162,204)] py-2 rounded-[20px] w-64">
                    <span>Request Services</span>
                  </button>
                  {openModal &&
                    <div className='z-50 fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
                      <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
                        <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>This is my modal.</h2>
                        <div className=" w-screen h-screen absolute z-[999] top-0 left-0 justify-center flex flex-row bg-[rgba(0,0,0,0.4)]">
                          <div className="flex flex-col justify-center w-full items-center ">
                            <form ref={form} className="w-3/5 flex flex-col min-w-[600] px-36 pb-36 pt-24 bg-[#2C3442] h-4/5 rounded-3xl" onSubmit={sendEmail}>
                              <div className='px-4 pt-2'>
                                <button
                                  type='button'
                                  className='h-8 px-4 text-sm rounded-md bg-gray-700 text-white float-right'
                                  onClick={handleModal}
                                >
                                  Close
                                </button>
                              </div>
                              <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full md:w-full px-3 md:mb-0">
                                  <span className="block uppercase tracking-wide text-white text-2xl mb-2 text-center" >
                                    REQUEST YOUR SHIPPING PROBLEM NOW!
                                  </span>
                                </div>
                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    First Name
                                  </label>
                                  <input required onChange={e => setFirstName(e.target.value)} name="firstname" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/4 px-3">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Last Name
                                  </label>
                                  <input required onChange={e => setLastName(e.target.value)} name="lastname" className="appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Email
                                  </label>
                                  <input required onChange={e => setEmail(e.target.value)} name="email" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="email" placeholder="guest@gmail.com" />
                                </div>
                                <div className="w-full md:w-1/4 px-3">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Phone Number
                                  </label>
                                  <input required onChange={e => setPhoneNumber(e.target.value)} name="phonenumber" className="appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="(888) 202-4660" />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Best Time to Speak
                                  </label>
                                  <input required onChange={e => setSpeaktime(e.target.value)} name="speaktime" type="date" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="2024-01-01 11:00 AM" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Travel Date
                                  </label>
                                  <input required onChange={e => setTraveldate(e.target.value)} name="traveldate" type="date" className=" outline-none appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 leading-tight " id="grid-last-name" placeholder="17243748910" />
                                </div>
                              </div>
                              <div className="flex flex-row">
                                <div className="md:w-full mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Number of Pets
                                  </label>
                                  <input required onChange={e => setPetsnumber(e.target.value)} name="petsnumber" className="appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="number" placeholder="0" />
                                </div>
                                <div className="md:w-full mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Pet Species
                                  </label>
                                  <input required onChange={e => setPetSpecies(e.target.value)} name="petspecies" className="appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Species" />
                                </div>
                                <div className="md:w-full mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Pet Breed
                                  </label>
                                  <input required onChange={e => setPetBreed(e.target.value)} name="petbreed" className="appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Breed" />
                                </div>
                              </div>
                              <div className="flex flex-row">
                                <div className="w-1/3  mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Pet Name(s)
                                  </label>
                                  <input required onChange={e => setPetName(e.target.value)} name="petname" className=" w-11/12 appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Net" />
                                </div>
                                <div className="w-1/3  mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Pet Age(s)
                                  </label>
                                  <input required onChange={e => setPetAge(e.target.value)} name="petage" className=" w-11/12 appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="0" />
                                </div>
                                <div className="w-1/3  mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Pet Weight(s)
                                  </label>
                                  <input required onChange={e => setPetweight(e.target.value)} name="petweight" className=" w-11/12 appearance-none block bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="0kg" />
                                </div>

                              </div>
                              <div className="flex flex-row gap-7">
                                <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Departing from
                                  </label>
                                  <div className="relative">
                                    <select onChange={e => setDepart(e.target.value)} name="depart" className="outline-none	block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                      <option value={"North America"}>North America </option>
                                      <option value={"Asia"}>Asia </option>
                                      <option value={"Africa"}>Africa </option>
                                      <option value={"Europe"}>Europe </option>
                                      <option value={"South America"}>South America </option>
                                      <option value={"The United Kingdom"}>The United Kingdom </option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4878D0]">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Traveling to
                                  </label>
                                  <div className="relative">
                                    <select onChange={e => setTopart(e.target.value)} name="topart" className="outline-none	block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                      <option value={"North America"}>North America </option>
                                      <option value={"Asia"}>Asia </option>
                                      <option value={"Africa"}>Africa </option>
                                      <option value={"Europe"}>Europe </option>
                                      <option value={"South America"}>South America </option>
                                      <option value={"The United Kingdom"}>The United Kingdom </option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row mt-7 justify-center">
                                <button className="w-2/5 bg-white hover:bg-gray-400 hover:text-white text-gray-600 font-bold py-2 px-4 rounded inline-flex items-center"  >
                                  <div className="w-full flex flex-col items-center"><span className="text-3xl">REQUEST </span></div>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className="flex md:hidden aspect-[16/9] md:aspect-[unset] w-full md:w-1/3 bg-cover bg-center aos-init aos-animate" style={{ backgroundImage: "url('./assets/home/services2.jpg?lossy=0&amp;strip=1&amp;webp=1')" }} data-aos="fade-left">
              </div>
              <div className="hidden md:flex aspect-[16/9] md:aspect-[unset] w-full md:w-1/3 bg-cover bg-center aos-init aos-animate" style={{ backgroundImage: "url('/assets/home/services1.jpg?lossy=0&amp;strip=1&amp;webp=1')" }} data-aos="fade-left">
              </div>
            </div>

          </div>
        </section>
        <section id="considers" className="dark:text-black flex justify-center pt-5 pb-10 w-full scroll-mt-24 bg-[#E5E7F0] rounded-bl-[150px]">
          <div className=" max-w-7xl ml-36 mr-36  flex flex-wrap items-center text-center">
            <div className=" text-center py-8 items-center w-full">
              <p className="text-5xl ">Things <span className="text-[#4878D0]"> to Consider </span></p>
              <br />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	Does my pet need vaccinations?
                  </li>
                  <li>•	Does my pet need rabies verification?
                  </li>
                  <li>•	Does my pet need a microchip?
                  </li>
                  <li>•	Is my pet’s breed allowed?
                  </li>
                  <li>•	Do I need a veterinarian?
                  </li>
                  <li>•	Will the veterinarian be familiar with the paperwork and requirements?
                  </li>
                  <li>•	What countries require quarantine?
                  </li>
                  <li>•	How do I quarantine my pet?
                  </li>
                  <li>•	Can I give my pet a sedative?
                  </li>
                </ul>
              </div>
              <div className="box-border">
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-12">
              <img src="./assets/considering/1.jpg" loading="lazy" alt="editor" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-12 py-4">
              <img src="./assets/considering/2.jpg" loading="lazy" alt="editor" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	Is pet travel safe?</li>
                  <li>•	Can my pet fly in-cabin?</li>
                  <li>•	Is my pet too large for the plane?</li>
                  <li>•	Will my existing crate work?</li>
                  <li>•	What is the USDA?</li>
                  <li>•	What are the destination country’s rules & requirements?</li>
                  <li>•	Will my pet be on the same flight as me?</li>
                  <li>•	How do I check my pet in?</li>
                  <li>•	If my pet can’t fly what are alternative transport options?</li>
                </ul>
              </div>
              <div className="box-border">
              </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <div className="text-xl">
                <ul>
                  <li>•	How much will I save money by doing it myself?</li>
                  <li>•	Does my pet need to be crate-trained?</li>
                  <li>•	Where does my pet go to the bathroom?</li>
                  <li>•	How do I measure my pet for the crate?</li>
                  <li>•	What can be in the crate with my pet?</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-12 py-4">
              <img src="./assets/considering/3.jpg" alt="editor" loading="lazy" className="rounded-3xl inline-block shadow-lg border border-merino-400" />
            </div>
          </div>
        </section>
        <section className="flex justify-center py-10 w-full scroll-mt-24">
          <div className=" max-w-[1600] ml-36 mr-36 ">
            <img src="./assets/payment.png" loading="lazy" />
          </div>
        </section>
        <div className="z-10 py-10 relative rounded-tr-none md:rounded-tr-brand rounded-bl-none md:rounded-bl-brand  acf/reviews bg-tertiary dark:text-black">
          <section className="pt-5">
            <div className="container mx-auto text-center">
              <div className="w-full reviews-slider flex justify-center mt-4">
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Daniel Turner                                </h1>
                      </div>
                    </div>
                    <div className="text-left mt-4 text-sm">
                      <h1 className="font-semibold">
                        &quot;Wonderful to work with&quot;                            </h1>
                      <div className="mt-2 font-thin">
                        <strong><span style={{ fontWeight: "400" }}>“Moving from the U.S. to Germany with our two Labrador Retrievers seemed daunting, but thanks to DIY, the process was seamless. They handled every detail—from ensuring all vaccinations were up to date, to securing the right crates. They even helped us understand Germany’s pet import regulations. Our dogs arrived safely and were happy right from the moment they landed. We can’t thank the team enough for their patience and expertise.!</span></strong><span style={{ fontWeight: "400" }} >”</span>                            </div>
                    </div>
                  </article>
                </div>
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Rita Hartley                                </h1>
                      </div>
                    </div>
                    <div className="text-left mt-4 text-sm">
                      <h1 className="font-semibold">
                        “We knew our boys were in excellent hands”                            </h1>
                      <div className="mt-2 font-thin">
                        <p><span style={{ fontWeight: "400" }}>“When our family faced an unexpected relocation, we were most concerned about how our elderly cat would handle the journey. The team at DIY was not only incredibly knowledgeable about the safest travel options but also genuinely caring towards our pet’s needs. They advised us on everything from crate training to the best flight schedules. It was a huge relief to have such expert and compassionate support every step of the way.”</span></p>                 </div>
                    </div>
                  </article>
                </div>
                <div className="w-full md:w-1/3 flex p-2.5">
                  <article className="w-full flex flex-col bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center space-x-4">
                      <div className="w-full justify-start items-start space-y-1 flex flex-col">
                        <div className="text-center">
                          <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
                        <h1 className="text-sm">
                          Thomas G                                </h1>
                      </div>
                    </div>
                    <div className="text-left mt-4 text-sm">
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

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/dog2.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/assets/pets/dog1.jpg"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/assets/pets/Cat.jpg"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Ferret.jpg"
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Bunny.jpg"
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Turtle.jpg"
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Snake.jpg"
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-1",
    thumbnail:
      "/assets/pets/Iguana.jpg"
  }
];

export const GlobeDemo = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="py-20 h-screen md:h-auto bg-[#E5E7F0] rounded-br-[150px] relative w-full">
      <div className="max-w-[1600] w-full flex flex-row relative overflow-hidden h-full md:h-[40rem] px-40">
        <div className="absolute h-full flex flex-row items-center">
          <div className="text-2xl">
            <h2 className="text-center text-5xl ">
              Destinations
            </h2>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Asia</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Africa</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from Europe</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from South America</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#E5E7F0] border-t-2 mt-4 border-[rgb(176,190,219)] rounded-b text-[#4878D0] px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="">•	North America to/from the United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-40" />
        <div className="relative w-full h-full md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
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