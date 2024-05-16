"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function Header() {

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

  const [value, setValue] = useState(false)
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal)
  }
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setValue(true)
      } else {
        setValue(false)
      }
    }

    if (window.window.scrollY > 100)
      setValue(true)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div id="mainHeader" className={`sticky ${value ? "bg-[#fff] text-black shadow-[0_10px_30px_0_rgba(124,88,211,.15)]" : "bg-none text-white "} w-screen transition-colors duration-100	 z-50 top-0 left-0 box-border z-999 flex gap-5 place-content-left`}>
        <div className="flex flex-col justify-center w-full" >
          <div className="flex flex-row text-lg gap-5 py-6">
            <a className=" cursor-pointer" href="#home"><img src="logo.png" className="ml-10 w-96" /></a>
            <div className="flex flex-row items-center gap-3">
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#aboutus">About Us</a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`} ><a href="#petTypes">Pet Types </a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`} ><a href="#destinations ">Destinations  </a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#services">Services</a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#considers">Things to Consider </a></div>
              <div className={`${value ? "text-black" : "text-white"}cursor-pointer hover:text-[#4878D0]`}><a href="#contactus">Conatact us</a></div>
            </div>
          </div>
        </div>
        <div className={` text-lg py-7 cursor-pointer float-right `}>
          <button onClick={handleModal} className={`${value ? "text-black bg-[#c7d7f5] hover:bg-[rgb(146,162,204)]" : "bg-[#4878D0] hover:bg-[rgb(118,139,196)]"}  py-2 rounded-[20px] w-64`}>
            <span>Request Services</span>
          </button>
          {openModal &&
            <div className='fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center'>
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
        <div className={`${value ? "text-black" : "text-white"} mt-2 px-10 cursor-pointer`}>
          <div className=" text-sm w-80">
            <div className="">
              <a href="mailto:--><!--"><span className="hover:underline font-light hover:text-[#4878D0]">info@diypetshiping.com </span></a>
              <a href="tel:--><!--" ></a><span className="hover:under linefont-light hover:text-[#4878D0]">| (888) 202-4660</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
