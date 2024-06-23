"use client"
import React, { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { env } from "process";


export default function Services() {
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
    const [service, setService] = useState<string>("");

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
            topart: topart,
            service: service
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
        setService("")
        setModal(!openModal)
    }

    return (
        <section style={{ background: "#" }} className=" py-10 relative scroll-mt-24 flex px-4 md:px-8 lg:px-12 flex-col justify-center items-center gap-8">
            <div className="text-center items-center w-full">
                <p className="text-5xl text-black">Services <span className="text-[#4878D0]"> We Offer:</span></p>
            </div>
            <div className="w-full max-w-[1440px]">
                <div className="w-full rounded-tr-[50px] md:rounded-3xl bg-[#2C3442] overflow-hidden flex flex-col lg:flex-row relative">
                    <div className="absolute hidden lg:block top-0 left-2/3 xl:left-[unset] xl:right-0 pointer-events-none">
                        <svg width="579" height="644" viewBox="0 0 579 644" fill="none" xmlns="http://www.w3.org/2000/svg" />
                    </div>
                    <div className="flex py-24 xl:py-32 px-8 xl:px-32 flex-col w-full lg:w-2/3">
                        <h1 className="text-white text-3xl heading aos-init aos-animate" data-aos="fade-up">
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
                        <h1 className="text-[#ffd700] text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $300 USD </h1>
                        <h1 className="text-[#ffd700] text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $150 USD </h1>
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
                        <h1 className="text-[#ffd700] text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $50 USD </h1>
                        <h1 className="text-[#ffd700] text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $25 USD </h1>
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
                        <h1 className="text-[#ffd700] text-xl mt-3 heading aos-init aos-animate text-center" data-aos="fade-up"> International - $75 USD </h1>
                        <h1 className="text-[#ffd700] text-xl heading aos-init aos-animate text-center" data-aos="fade-up"> Domestic - $25 USD </h1>
                        <h1 className="text-white text-xl heading aos-init mt-10 aos-animate" data-aos="fade-up">&nbsp;&nbsp;By offering these services, we can help pet owners navigate the often complex paperwork, procedures, and regulatory requirements associated with transporting pets domestically or internationally.&nbsp;This helps to ensure a smooth and hassle-free experience for both the pets and their owners. </h1>
                        <div className={` text-lg cursor-pointer self-center mt-10 `}>
                            <button onClick={handleModal} className="text-black bg-[#c7d7f5] hover:bg-[rgb(146,162,204)] py-2 rounded-[20px] w-64">
                                <span>Request Services</span>
                            </button>
                            {openModal &&
                                <div className='fixed top-0 left-0 w-full h-full bg-gray-300 z-50 flex justify-center items-center'>
                                    <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
                                        <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>This is my modal.</h2>
                                        <div className="w-full h-screen absolute top-0 left-0 justify-start flex flex-row bg-[rgba(0,0,0,0.4)] items-center">
                                            <div className="flex flex-col justify-start w-full items-center px-12 max-h-[90dvh] overflow-y-auto">
                                                <form ref={form} className="max-w-[1200px] w-full flex flex-col p-4 md:p-8 lg:px-36 lg:py-10 bg-[#2C3442] rounded-3xl" onSubmit={sendEmail}>
                                                    <div className='flex flex-row-reverse'>
                                                        <button
                                                            type='button'
                                                            className='h-8 px-4 text-sm rounded-md bg-gray-700 text-white float-right'
                                                            onClick={handleModal}
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3">
                                                        <div className="w-full md:w-full px-3 md:mb-0">
                                                            <span className="block uppercase tracking-wide text-white text-2xl mb-2 text-center" >
                                                                REQUEST SERVICES
                                                            </span>
                                                        </div>
                                                        <div className="w-full md:w-1/4 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                First Name
                                                            </label>
                                                            <input required onChange={e => setFirstName(e.target.value)} name="firstname" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Jane" />
                                                        </div>
                                                        <div className="w-full md:w-1/4 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Last Name
                                                            </label>
                                                            <input required onChange={e => setLastName(e.target.value)} name="lastname" className="appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-last-name" type="text" placeholder="Doe" />
                                                        </div>
                                                        <div className="w-full md:w-1/4 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Email
                                                            </label>
                                                            <input required onChange={e => setEmail(e.target.value)} name="email" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none mb-3" type="email" placeholder="guest@gmail.com" />
                                                        </div>
                                                        <div className="w-full md:w-1/4 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Phone Number
                                                            </label>
                                                            <input required onChange={e => setPhoneNumber(e.target.value)} name="phonenumber" className="appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-last-name" type="text" placeholder="(888) 202-4660" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 ">
                                                        <div className="w-full md:w-1/2 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Best Time to Speak
                                                            </label>
                                                            <input required onChange={e => setSpeaktime(e.target.value)} name="speaktime" type="date" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="2024-01-01 11:00 AM" />
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Travel Date
                                                            </label>
                                                            <input required onChange={e => setTraveldate(e.target.value)} name="traveldate" type="date" className=" outline-none appearance-none block w-full bg-white text-black border bordbg-white rounded py-3 px-4 mb-3 leading-tight " id="grid-last-name" placeholder="17243748910" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3">
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Number of Pets
                                                            </label>
                                                            <input required onChange={e => setPetsnumber(e.target.value)} name="speaktime" type="number" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="0" />
                                                        </div>
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Pet Species
                                                            </label>
                                                            <input required onChange={e => setPetSpecies(e.target.value)} name="speaktime" type="text" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="Pet Species" />
                                                        </div>
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Pet Breed
                                                            </label>
                                                            <input required onChange={e => setPetBreed(e.target.value)} name="speaktime" type="text" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="Pet Breed" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3">
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Pet Name(s)
                                                            </label>
                                                            <input required onChange={e => setPetName(e.target.value)} name="speaktime" type="text" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="Pet Names" />
                                                        </div>
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Pet Age(s)
                                                            </label>
                                                            <input required onChange={e => setPetAge(e.target.value)} name="speaktime" type="number" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="0" />
                                                        </div>
                                                        <div className="w-full md:w-1/3 px-3">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Pet Weight(s)
                                                            </label>
                                                            <input required onChange={e => setPetweight(e.target.value)} name="speaktime" type="number" className="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="0kg" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row gap-7">
                                                        <div className="w-1/2 md:w-1/2">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Departing from
                                                            </label>
                                                            <div className="relative">
                                                                <select onChange={e => setDepart(e.target.value)} name="depart" className="outline-none	block appearance-none w-full cursor-pointer bg-white border border-gray-200 text-black py-3 px-4 pr-8 mb-3 rounded leading-tight " id="grid-state">
                                                                    <option value={"North America"}>North America </option>
                                                                    <option value={"Asia"}>Asia </option>
                                                                    <option value={"Africa"}>Africa </option>
                                                                    <option value={"Europe"}>Europe </option>
                                                                    <option value={"South America"}>South America </option>
                                                                    <option value={"The United Kingdom"}>The United Kingdom </option>
                                                                </select>
                                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#2C3442]">
                                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 md:w-1/2">
                                                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                                Traveling to
                                                            </label>
                                                            <div className="relative">
                                                                <select onChange={e => setTopart(e.target.value)} name="topart" className="outline-none	block appearance-none w-full cursor-pointer bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                                                    <option value={"North America"}>North America </option>
                                                                    <option value={"Asia"}>Asia </option>
                                                                    <option value={"Africa"}>Africa </option>
                                                                    <option value={"Europe"}>Europe </option>
                                                                    <option value={"South America"}>South America </option>
                                                                    <option value={"The United Kingdom"}>The United Kingdom </option>
                                                                </select>
                                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#2C3442]">
                                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 w-full md:w-full">
                                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                                            services
                                                        </label>
                                                        <div className="relative">
                                                            <select onChange={e => setService(e.target.value)} name="services" className={`outline-none	block appearance-none w-full cursor-pointer bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight ${service ? 'text-black' : 'text-gray-500'}`} id="grid-state">
                                                                <option value={""} disabled selected hidden >What Services are you Looking for?</option>
                                                                <option className="text-black" value={"Destination Requirements"}>Destination Requirements </option>
                                                                <option className="text-black" value={"Veterinarian Requirements"}>Veterinarian Requirements </option>
                                                                <option className="text-black" value={"Region Requirements"}>Region Requirements </option>
                                                                <option className="text-black" value={"Method of Transpor"}>Method of Transpor </option>
                                                                <option className="text-black" value={"Airline Options, Flight Booking, Paperwork & Checking-In"}>Airline Options, Flight Booking, Paperwork & Checking-In </option>
                                                                <option className="text-black" value={"Ground Transportation"}>Ground Transportation </option>
                                                                <option className="text-black" value={"Airline Accepted Crates "}>Airline Accepted Crates  </option>
                                                                <option className="text-black" value={"Pre-filling Health Certificates"}>Pre-filling Health Certificates </option>
                                                                <option className="text-black" value={"Reviewing Veterinarian's Paperwork"}>Reviewing Veterinarian&apos;s Paperwork </option>
                                                            </select>
                                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#2C3442]">
                                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row mt-7 justify-center">
                                                        <button className="w-2/5 bg-white hover:bg-gray-400 hover:text-white text-gray-600 font-bold py-2 px-4 rounded inline-flex items-center"  >
                                                            <div className="w-full flex flex-col items-center"><span className="text-3xl">REQUEST</span></div>
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
                    <div className="flex lg:hidden aspect-[16/9] lg:aspect-[unset] w-full lg:w-1/3 bg-cover bg-center aos-init aos-animate" style={{ backgroundImage: "url('./assets/home/services2.jpg?lossy=0&amp;strip=1&amp;webp=1')" }} data-aos="fade-left">
                    </div>
                    <div className="hidden lg:flex aspect-[16/9] lg:aspect-[unset] w-full lg:w-1/3 bg-cover bg-center aos-init aos-animate" style={{ backgroundImage: "url('/assets/home/services1.jpg?lossy=0&amp;strip=1&amp;webp=1')" }} data-aos="fade-left">
                    </div>
                </div>
            </div>
        </section>
    )
}