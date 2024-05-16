export default function Footer() {
  return (
    <>
      <div id="contactus" className="bg-tertiary bg-[#E5E7F0]">
        <div className="container px-4 mx-auto py-16">
          <div className="flex text-base flex-col md:flex-row text-left w-full text-black">
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-1/3 md:w-1/3">
                <ul className="space-y-2 md:space-y-4">
                  <li className=" flex relative">
                    <a href="#aboutus" className="items-center font-light text-lg flex relative group">
                      <div>
                        About us                                            </div>
                      <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                    </a>
                  </li>
                  <li className=" flex relative">
                    <a href="#petTypes" className="items-center font-light text-lg flex relative group">
                      <div>
                        Pet types                                            </div>
                      <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                    </a>
                  </li>
                  <li className=" flex relative">
                    <a href="#destinations" className="items-center font-light text-lg flex relative group">
                      <div>
                        Destinations                                          </div>
                      <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                    </a>
                  </li>
                  <li className=" flex relative">
                    <a href="#services" className="items-center font-light text-lg flex relative group">
                      <div>
                        Services                                           </div>
                      <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                    </a>
                  </li>
                  <li className=" flex relative">
                    <a href="#considering" className="items-center font-light text-lg flex relative group">
                      <div>
                        Things to consider                                           </div>
                      <div className="flex ml-2 group-hover:-translate-y-px transition-all">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.66663 11.3332L11.3333 4.6665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M4.66663 4.6665H11.3333V11.3332" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="w-0 transition-all group-hover:w-full h-[2px] rounded-full bg-black absolute top-full left-0"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mt-6 font-light text-lg">
                  <a href="#contactus">
                    Contact us
                  </a>
                </h3>
                <div className="mt-1">
                  <a href="mailto:--><!--" className="font-light hover:underline">
                    •	info@diypetshiping.com
                  </a>
                </div>
                <div className="mt-1">
                  <a href="tel:--><!--" className="font-light hover:underline">
                    •	phone number: (888) 202-4660
                  </a>
                </div>
              </div>
              {/* <div className="w-2/3 md:w-2/3 mt-8 md:mt-0">
                <form className="w-full flex flex-col">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        First Name
                      </label>
                      <input required className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/4 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Last Name
                      </label>
                      <input required className="appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Email
                      </label>
                      <input required className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="guest@gmail.com" />
                    </div>
                    <div className="w-full md:w-1/4 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Phone Number
                      </label>
                      <input required className="appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="17243748910" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Best Time to Speak
                      </label>
                      <input required type="date" className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="2024-01-01 11:00 AM" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Travel Date
                      </label>
                      <input required type="date" className=" outline-none appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 leading-tight " id="grid-last-name" placeholder="17243748910" />
                    </div>
                  </div>
                  <div className="md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                      Number of Pets
                    </label>
                    <input required className="appearance-none block bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="number" placeholder="0" />
                  </div>
                  <div className="flex flex-row">
                    <div className="w-1/3  mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Pet Name
                      </label>
                      <input required className=" w-11/12 appearance-none block bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Net" />
                    </div>
                    <div className="w-1/3  mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Pet Age
                      </label>
                      <input className=" w-11/12 appearance-none block bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="0" />
                    </div>
                    <div className="w-1/3  mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Pet Weight
                      </label>
                      <input className=" w-11/12 appearance-none block bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="0kg" />
                    </div>

                  </div>
                  <div className="flex flex-row gap-7">
                    <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Departing from
                      </label>
                      <div className="relative">
                        <select className="outline-none	block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                          <option>North America </option>
                          <option>Asia </option>
                          <option>Africa </option>
                          <option>Europe </option>
                          <option>South America </option>
                          <option>the United Kingdom </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Traveling to
                      </label>
                      <div className="relative">
                        <select className="outline-none	block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                          <option>North America </option>
                          <option>Asia </option>
                          <option>Africa </option>
                          <option>Europe </option>
                          <option>South America </option>
                          <option>the United Kingdom </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-7 justify-center">
                    <button className="w-2/5 bg-white hover:bg-gray-400 hover:text-white text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center" >
                      <div className="w-full flex flex-col items-center"><span className="text-3xl">Submit </span></div>
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
