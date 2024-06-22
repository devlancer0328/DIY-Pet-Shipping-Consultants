"use client"

export default function Considers() {
    return (
        <section id="considers" className="  dark:text-black flex flex-col justify-center w-full scroll-mt-24  rounded-bl-[40px] md:rounded-bl-[150px] items-center">
            <div className="text-center py-10 items-center w-full">
                <p className="text-5xl ">Things <span className="text-[#4878D0]"> to Consider </span></p>
            </div>
            <div className="pb-10">
                <div className="max-w-[1440px] bg-[#E5E7F0] w-full px-4 md:px-12 flex flex-col lg:flex-row flex-wrap items-center text-center gap-8 p-10">
                    <div className="w-full flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/2 text-left items-center">
                            <div className="text-xl">
                                <ul className="-indent-4">
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
                                    <li>•	What is the USDA?</li>
                                    <li>•	What are the destination country’s rules & requirements?</li>
                                    <li>•	How do I quarantine my pet?
                                    </li>
                                    <li>•	Can I give my pet a sedative?
                                    </li>
                                </ul>
                            </div>
                            <div className="box-border">
                            </div>
                        </div>
                        <div className="w-full max-h-[300px] lg:max-h-full rounded-3xl overflow-hidden lg:w-1/2 flex items-center justify-center">
                            <img src="./assets/considering/1.jpg" loading="lazy" alt="editor" className="inline-block shadow-lg border border-merino-400" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col-reverse lg:flex-row gap-8 items-center">
                        <div className="w-full max-h-[300px] lg:max-h-full rounded-3xl overflow-hidden lg:w-1/2 flex items-center justify-center">
                            <img src="./assets/considering/2.jpg" loading="lazy" alt="editor" className="inline-block shadow-lg border border-merino-400" />
                        </div>
                        <div className="w-full lg:w-1/2 px-4 text-left">
                            <div className="text-xl">
                                <ul className="-indent-4">
                                    <li>•	Is pet travel safe?</li>
                                    <li>•	Can my pet fly in-cabin?</li>
                                    <li>•	Is my pet too large for the plane?</li>
                                    <li>•	Will my existing crate work?</li>
                                    <li>•	Will my pet be on the same flight as me?</li>
                                    <li>•	How do I check my pet in?</li>
                                    <li>•	If my pet can’t fly what are alternative transport options?</li>
                                </ul>
                            </div>
                            <div className="box-border">
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
                        <div className="w-full lg:w-1/2 text-left" >
                            <div className="text-xl">
                                <ul className="-indent-4">
                                    <li>•	How much will I save money by doing it myself?</li>
                                    <li>•	Does my pet need to be crate-trained?</li>
                                    <li>•	Where does my pet go to the bathroom?</li>
                                    <li>•	How do I measure my pet for the crate?</li>
                                    <li>•	What can be in the crate with my pet?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full max-h-[300px] lg:max-h-full rounded-3xl overflow-hidden lg:w-1/2 flex items-center justify-center">
                            <img src="./assets/considering/3.jpg" alt="editor" loading="lazy" className="inline-block shadow-lg border border-merino-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

