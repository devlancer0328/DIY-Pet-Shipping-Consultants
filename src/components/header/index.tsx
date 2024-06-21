"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import MenuIcon from "../icons/menuIcon";
import CloseIcon from "../icons/closeIcon";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import path from "path";
import { Tube } from "@react-three/drei";

export default function Header() {

  const pathname = usePathname();

  const form = useRef<HTMLFormElement>(null);

  const [menu, setMenu] = useState(false);
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

  const [value, setValue] = useState(false)
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

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      setValue(window.scrollY > 100);
    } else {
      setValue(true);
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <div id="mainHeader" className={`sticky ${value ? "bg-[#fff] text-black shadow-[0_10px_30px_0_rgba(124,88,211,.15)]" : "bg-transparent text-white "} w-full transition-all z-50 top-0 left-0 box-border flex`}>
        <div className="flex flex-col justify-center flex-1" >
          <div className="flex flex-col xl:flex-row text-lg gap-4 p-6">
            <Link className="hidden md:block max-w-1/2 cursor-pointer" href="/"><img src="logo.png" className="w-96" /></Link>
            <div className="hidden md:flex flex-row items-center gap-3 flex-wrap flex-none xl:flex-1">
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`}><Link href="/aboutus">About Us</Link></div>
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`} ><Link href="/petTypes">Pet Types </Link></div>
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`} ><Link href="/destinations ">Destinations  </Link></div>
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`}><Link href="/services">Services</Link></div>
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`}><Link href="/considers">Things to Consider </Link></div>
              <div className={`${value ? "text-black" : "text-white"} cursor-pointer hover:text-[#4878D0]`}><Link href="#contactus">Contact us</Link></div>
            </div>
            <MenuIcon className='transition-all relative md:hidden cursor-pointer opacity-100 hover:opacity-80' onClick={() => setMenu(true)} />
            <div className={`transition-all absolute ${menu ? 'z-10 h-screen' : '-z-10 h-0'} bg-zinc-400 opacity-10 top-0 left-0 w-full cursor-pointer`} onClick={() => setMenu(false)}></div>
            <div className={`transition-all ${menu ? 'translate-x-0' : '-translate-x-full'} absolute z-20 w-full max-w-[300px] h-screen bg-white top-0 left-0 flex flex-col py-6 px-6 gap-12 text-black`}>
              <div className="flex flex-row-reverse">
                <CloseIcon stroke='black' fill='black' className='transition-all cursor-pointer opacity-100 hover:opacity-80' onClick={() => setMenu(false)} />
              </div>
              <Link className="cursor-pointer" href="#home"><img src="logo.png" className="w-full" /></Link>
              <div className="transition-all w-full bg-white top-0 left-0 flex flex-col p-6 gap-6 text-black">
                <div className="transition-all hover:text-[#4878D0]"><Link href="/aboutus" onClick={() => setMenu(false)}>About Us</Link></div>
                <div className="transition-all hover:text-[#4878D0]" ><Link href="/petTypes" onClick={() => setMenu(false)}>Pet Types </Link></div>
                <div className="transition-all hover:text-[#4878D0]" ><Link href="/destinations" onClick={() => setMenu(false)}>Destinations  </Link></div>
                <div className="transition-all hover:text-[#4878D0]"><Link href="/services" onClick={() => setMenu(false)}>Services</Link></div>
                <div className="transition-all hover:text-[#4878D0]"><Link href="/considers" onClick={() => setMenu(false)}>Things to Consider </Link></div>
                <div className="transition-all hover:text-[#4878D0]"><a href="#contactus" onClick={() => setMenu(false)}>Contact us</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg p-4 flex flex-col gap-4">
          <div className={`${value ? "text-black" : "text-white"} mt-2 hidden sm:flex`}>
            <div className="text-sm w-content">
              <div className="">
                <a href="mailto:info@diypetshiping.com"><span className="hover:underline font-light hover:text-[#4878D0]">info@diypetshiping.com</span></a>
                <a href="tel:+1888202-4660" ><span className="hover:under linefont-light hover:text-[#4878D0] coursor-pointer">| +1 (888) 202-4660</span></a>
              </div>
            </div>
          </div>
          <button onClick={handleModal} className={`${value ? "text-black bg-[#c7d7f5] hover:bg-[rgb(146,162,204)]" : "bg-[#4878D0] hover:bg-[rgb(118,139,196)]"} py-2 rounded-[20px] w-40 md:w-64 self-end text-sm md:text-lg`}>
            <span>Request Services</span>
          </button>
          {openModal &&
            <div className='fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
              <div className='max-w-[460px] bg-white shadow-lg py-2 rounded-md'>
                <h2 className='text-sm font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>This is my modal.</h2>
                <div className="w-full h-screen absolute z-[999] top-0 left-0 justify-start flex flex-row bg-[rgba(0,0,0,0.4)] items-center">
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
                            <option value={""} disabled selected hidden >What services are you looking for?</option>
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
    </>
  );
}
