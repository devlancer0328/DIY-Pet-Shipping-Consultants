// "use client";

// import React, { useState, useEffect, useRef, FormEvent } from "react";
// import "swiper/css";
// import "swiper/css/pagination"
// import "react-multi-carousel/lib/styles.css";


// export default function Home() {



//   return (
//     <>
//       <main>
//         <div id="home" className=" absolute top-0 w-0" />
//         <section className="text-white h-screen w-full max-md:px-5">
//           <div className="absolute inset-0 w-full bg-[url(/assets/home/background.png)] bg-cover bg-center h-screen"></div>
//           <div className="absolute inset-0 w-full h-screen flex flex-col items-center justify-center text-center">
//             <h1 className="animate-fade-right animate-once transition-all animate-ease-linear relative mt-40 text-8xl text-pretty tracking-wider leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//               DIY Pet Shipping
//             </h1>
//             <p className="animate-fade-up transition-all animate-ease-linear animate-normal animate-fill-forwards relative mt-20 text-5xl text-pretty max-md:max-w-full">
//               Guiding Your Pet’s Journey, Every Step of the Way!
//             </p>
//           </div>
//         </section>
//         <div className="z-10 pb-10 relative rounded-tr-none md:rounded-tr-brand rounded-bl-none md:rounded-bl-brand acf/reviews bg-tertiary dark:text-black">
//           <section className="pt-5">
//             <div className="container mx-auto text-center">
//               <div className="w-full px-4 md:px-8 lg:px-12 reviews-slider flex justify-center mt-4 md:flex-row flex-col">
//                 <div className="w-full flex flex-1">
//                   <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-full justify-start items-start space-y-1 flex flex-col">
//                         <div className="text-center">
//                           <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
//                         <h1 className="text-sm">
//                           Daniel Turner                                </h1>
//                       </div>
//                     </div>
//                     <div className="text-left text-sm">
//                       <h1 className="font-semibold">
//                         &quot;Wonderful to work with&quot;                            </h1>
//                       <div className="mt-2 font-thin">
//                         <strong><span style={{ fontWeight: "400" }}>“Moving from the U.S. to Germany with our two Labrador Retrievers seemed daunting, but thanks to DIY, the process was seamless. They handled every detail—from ensuring all vaccinations were up to date, to securing the right crates. They even helped us understand Germany’s pet import regulations. Our dogs arrived safely and were happy right from the moment they landed. We can’t thank the team enough for their patience and expertise.!</span></strong><span style={{ fontWeight: "400" }} >”</span>                            </div>
//                     </div>
//                   </article>
//                 </div>
//                 <div className="w-full flex flex-1">
//                   <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-full justify-start items-start space-y-1 flex flex-col">
//                         <div className="text-center">
//                           <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
//                         <h1 className="text-sm">
//                           Rita Hartley                                </h1>
//                       </div>
//                     </div>
//                     <div className="text-left text-sm">
//                       <h1 className="font-semibold">
//                         “We knew our boys were in excellent hands”                            </h1>
//                       <div className="mt-2 font-thin">
//                         <p><span style={{ fontWeight: "400" }}>“When our family faced an unexpected relocation, we were most concerned about how our elderly cat would handle the journey. The team at DIY was not only incredibly knowledgeable about the safest travel options but also genuinely caring towards our pet’s needs. They advised us on everything from crate training to the best flight schedules. It was a huge relief to have such expert and compassionate support every step of the way.”</span></p>                 </div>
//                     </div>
//                   </article>
//                 </div>
//                 <div className="w-full flex flex-1">
//                   <article className="w-full flex flex-col gap-4 bg-white p-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-full justify-start items-start space-y-1 flex flex-col">
//                         <div className="text-center">
//                           <ul className="flex items-center space-x-1 text-sm text-primary"><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li><li><i className="fa fa-star" aria-hidden="true"></i></li></ul>                                </div>
//                         <h1 className="text-sm">
//                           Thomas G                                </h1>
//                       </div>
//                     </div>
//                     <div className="text-left text-sm">
//                       <h1 className="font-semibold">
//                         “The full team was spectacular”                            </h1>
//                       <div className="mt-2 font-thin">
//                         <strong><span style={{ fontWeight: "400" }}>“I was overwhelmed by the thought of shipping my snake to South America, but DIY went above and beyond to assist us. They were thorough in explaining what kind of crate was needed, how to manage feeding schedules, and even the specifics of temperature control during transit. Their attention to detail and proactive communication made a complicated process much easier. Highly recommend their services for anyone needing to transport exotic pets!</span></strong><span style={{ fontWeight: "400" }}>”</span>                            </div>
//                     </div>
//                   </article>
//                 </div>
//               </div>
//               <div className="container mx-auto px-4 pb-16 md:pb-8 md:hidden mt-4">
//                 <div className="w-full flex items-center justify-between">
//                   <div className="w-full md:w-[calc(100%-120px)] flex items-center">
//                     <div className="reviews-slider-progress slider-progress-bar">
//                       <div className="reviews-slider-progress-inner slider-progress-inner"></div>
//                     </div>
//                   </div>
//                   <div className="w-[100px] justify-end space-x-4 hidden md:flex">
//                     <button id="reviewsPrev" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
//                       <span className="sr-only">Previous slide</span>
//                       <i className="fa fa-chevron-left text-white"></i>
//                     </button>
//                     <button id="reviewsNext" className="bg-primary flex rounded-full items-center justify-center w-10 h-10">
//                       <span className="sr-only">Next slide</span>
//                       <i className="fa fa-chevron-right text-white"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section >
//         </div >
//       </main >
//     </>
//   );
// }

// export const projects = [
//   {
//     title: "Destination Paperwork & Requirements ",
//     description:
//       "A technology company that builds economic infrastructure for the internet."
//   },
//   {
//     title: "Veterinarian Paperwork & Documents Required ",
//     description:
//       "This includes all veterinarian paperwork and documents your pet(s) will need for your destination."
//   },
//   {
//     title: "Quarantine, Import Permits, Export Permits, Tapeworm Treatment, Parasite Treatment & Bloodwork",
//     description:
//       "Does your pet need any of these things to get to their destination?"
//   },
//   {
//     title: "Airline Paperwork & Check-In Requirements ",
//     description:
//       "This is based on the airline and the routing utilized."
//   },
//   {
//     title: "Pet-Friendly Commercial or Private Charter Flights ",
//     description:
//       "Commercial and Private Charter options."
//   },
//   {
//     title: "In-cabin Flights ",
//     description:
//       "This is dependent on airline, pet type and pet size."
//   },
//   {
//     title: "Ground Transport Options ",
//     description:
//       "An alternative option for you & your pet(s)."
//   },
//   {
//     title: "Residential Pick-up / Airport Delivery ",
//     description:
//       "Need assistance with pick-up and airport check-in?"
//   },
//   {
//     title: "Airport Pick-Up / Residential Delivery",
//     description:
//       "Need assistance with airport pick-up, customs, or residential delivery? "
//   },
//   {
//     title: "Airline Accepted Crates & Where to Get Them",
//     description:
//       "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
//   },
//   {
//     title: "Airline Accepted Crates & Where to Get Them",
//     description:
//       "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
//   },
//   {
//     title: "International or Domestic Document Reviews",
//     description:
//       "Which crates will the airline accept for both in-cabin and cargo and where to get them. "
//   }
// ];
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Code, Laptop, Rocket, Users, Star, CheckCircle, Cloud, Shield, Smartphone, Zap, Database, Layers, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  const [openAccordionItem, setOpenAccordionItem] = useState<string | null>(null)

  // Inline Button component
  const Button = ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  // Inline Card components
  const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )

  const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )

  const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )

  const CardDescription = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  )

  const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )

  // Inline Accordion components
  const Accordion = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="space-y-2" {...props}>
      {children}
    </div>
  )

  const AccordionItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
    <div className="border-b">{children}</div>
  )

  const AccordionTrigger = ({ children, value }: { children: React.ReactNode; value: string }) => (
    <button
      className="flex w-full items-center justify-between py-4 text-left"
      onClick={() => setOpenAccordionItem(openAccordionItem === value ? null : value)}
    >
      {children}
      <ChevronDown className={`h-4 w-4 transition-transform ${openAccordionItem === value ? 'rotate-180' : ''}`} />
    </button>
  )

  const AccordionContent = ({ children, value }: { children: React.ReactNode; value: string }) => (
    <div className={`overflow-hidden transition-all ${openAccordionItem === value ? 'max-h-96' : 'max-h-0'}`}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )

  // Inline ChevronDown icon
  const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(0,4,15)] text-gray-300 overflow-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[rgba(0,4,15,0.8)] backdrop-blur-md border-b border-[#33bbcf]/20 sticky top-0 z-50 transition-all duration-300 ease-in-out">
        <Link className="flex items-center justify-center group" href="#">
          <Laptop className="h-6 w-6 text-[#5ce1e6] transition-transform duration-300 ease-in-out group-hover:rotate-12" />
          <span className="ml-2 text-lg font-bold text-white group-hover:text-[#5ce1e6] transition-colors duration-300">Quantum</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Services", "Team", "Projects", "Testimonials", "FAQ", "Contact"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-[#5ce1e6] transition-colors duration-300 relative group" href={`#${item.toLowerCase()}`}>
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#5ce1e6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(92,225,230,0.1)] to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-fade-in-up">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#def9fa] via-[#5ce1e6] to-[#33bbcf]">
                    Improve Your Business With Quantum
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl animate-fade-in-up animation-delay-200">
                  We create cutting-edge web solutions to propel businesses into the digital future.
                </p>
              </div>
              <div className="animate-fade-in-up animation-delay-400">
                <Button className=" px-3 h-12 bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] hover:from-[#33bbcf] hover:to-[#5ce1e6] text-[rgb(0,4,15)] transition-all duration-300 ease-in-out transform hover:scale-105">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgb(0,4,15)] to-transparent"></div>
        </section>
        {/* Services section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(0,4,15,0.7)] relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Code, title: "Custom Web Development", description: "Tailored solutions for your unique needs" },
                { icon: Rocket, title: "Performance Optimization", description: "Speed up your digital presence" },
                { icon: Users, title: "UI/UX Design", description: "Create engaging user experiences" },
                { icon: Cloud, title: "Cloud Solutions", description: "Scalable and reliable infrastructure" },
                { icon: Shield, title: "Cybersecurity", description: "Protect your digital assets" },
                { icon: Smartphone, title: "Mobile App Development", description: "Reach users on any device" },
              ].map((service, index) => (
                <Card key={service.title} className="bg-[rgba(0,4,15,0.6)] border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(0,4,15,0.8)] group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <service.icon className="h-8 w-8 mb-2 text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300" />
                    <CardTitle className="text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    We leverage cutting-edge technologies to deliver exceptional results.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Company section */}
        <section id="company" className="w-full py-12 md:py-24 lg:py-32 bg-[rgb(0,4,15)] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(92,225,230,0.05)] to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Our Company</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Innovation", description: "Pioneering cutting-edge solutions", icon: Zap },
                { name: "Expertise", description: "Years of industry experience", icon: CheckCircle },
                { name: "Collaboration", description: "Partnering for success", icon: Users },
                { name: "Reliability", description: "Trusted by leading businesses", icon: Shield },
              ].map((value, index) => (
                <Card key={value.name} className="bg-[rgba(0,4,15,0.6)] border-[#33bbcf]/20 group hover:bg-[rgba(0,4,15,0.8)] transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <value.icon className="h-12 w-12 mb-4 text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300" />
                    <CardTitle className="text-center text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300">{value.name}</CardTitle>
                    <CardDescription className="text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-[rgb(0,4,15)] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(92,225,230,0.05)] to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Our Team</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Alice Johnson", role: "Lead Developer", image: "/assets/team/1.jpg" },
                { name: "Bob Smith", role: "UX Designer", image: "/assets/team/2.jpg" },
                { name: "Charlie Brown", role: "Backend Specialist", image: "/assets/team/4.jpg" },
                { name: "Diana Lee", role: "Frontend Developer", image: "/assets/team/5.jpg" },
              ].map((member, index) => (
                <Card key={member.name} className="bg-[rgba(0,4,15,0.6)] border-[#33bbcf]/20 group hover:bg-[rgba(0,4,15,0.8)] transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#5ce1e6] group-hover:border-[#33bbcf] transition-colors duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <CardTitle className="text-center text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300">{member.name}</CardTitle>
                    <CardDescription className="text-center text-[#9dedf0] group-hover:text-[#bef3f5] transition-colors duration-300">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(0,4,15,0.7)] relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Our Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "E-commerce Platform", description: "A scalable online store with advanced features", image: "/assets/projects/1.png" },
                { name: "Social Media Platform", description: "Centralized management for multiple social accounts", image: "/assets/projects/2.jpg" },
                { name: "AI-Powered Chatbot", description: "Intelligent customer service automation", image: "/assets/projects/3.png" },
                { name: "Real-time Analytics Tool", description: "Visualize and analyze data in real-time", image: "/assets/projects/4.jpg" },
                { name: "Mobile Fitness App", description: "Personalized workout and nutrition tracking", image: "/assets/projects/5.png" },
                { name: "Video Streaming Platform", description: "TV application for live streaming", image: "/assets/projects/6.png" },
              ].map((project, index) => (
                <Card key={project.name} className="bg-[rgba(0,4,15,0.6)] border-[#33bbcf]/20 overflow-hidden group hover:bg-[rgba(0,4,15,0.8)] transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0  bg-gradient-to-t from-[rgba(0,4,15,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300">{project.name}</CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[rgb(0,4,15)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(92,225,230,0.05)] to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Client Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "John Doe", company: "Tech Innovators", testimonial: "Quantum transformed our online presence. Their expertise in web development is unmatched.", rating: 5 },
                { name: "Jane Smith", company: "Global Solutions", testimonial: "The team at Quantum delivered beyond our expectations. Our new website has significantly boosted our conversions.", rating: 5 },
                { name: "Mike Johnson", company: "StartUp Inc.", testimonial: "Working with Quantum was a game-changer for our startup. They understood our vision and brought it to life.", rating: 5 },
              ].map((testimonial, index) => (
                <Card key={testimonial.name} className="bg-[rgba(0,4,15,0.6)] border-[#33bbcf]/20 group hover:bg-[rgba(0,4,15,0.8)] transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-[#5ce1e6] group-hover:text-[#33bbcf] transition-colors duration-300">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.testimonial}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:text-yellow-300 transition-colors duration-300" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-[rgba(0,4,15,0.7)] relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Frequently Asked Questions</h2>
            <Accordion className="w-full max-w-3xl mx-auto">
              {[
                { question: "What technologies do you specialize in?", answer: "We specialize in a wide range of modern web technologies, including React, Next.js, Node.js, and various cloud platforms. Our team stays up-to-date with the latest trends to ensure we deliver cutting-edge solutions." },
                { question: "How long does a typical project take?", answer: "Project timelines can vary greatly depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take several months. We provide detailed timelines during our project planning phase." },
                { question: "Do you offer ongoing support and maintenance?", answer: "Yes, we offer various support and maintenance packages to ensure your web application continues to perform optimally after launch. Our team can provide regular updates, security patches, and performance optimizations." },
                { question: "How do you ensure the security of web applications?", answer: "Security is a top priority in all our projects. We implement best practices such as secure authentication, data encryption, regular security audits, and compliance with industry standards like OWASP." },
                { question: "Can you help with migrating an existing website or application?", answer: "We have extensive experience in migrating existing websites and applications to modern platforms. We ensure a smooth transition with minimal downtime and data integrity." },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <AccordionTrigger className="text-[#5ce1e6] hover:text-[#33bbcf] transition-colors duration-300">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300" value={`item-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        {/* Contact section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[rgb(0,4,15)] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(92,225,230,0.1)] to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#5ce1e6] animate-fade-in-up">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4 animate-fade-in-up">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                  <input
                    id="name"
                    className="w-full px-3 py-2 bg-[rgba(0,4,15,0.6)] border rounded-md border-[#33bbcf] focus:ring-2 focus:ring-[#5ce1e6] focus:border-transparent text-gray-200 transition-all duration-300 ease-in-out"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                  <input
                    id="email"
                    className="w-full px-3 py-2 bg-[rgba(0,4,15,0.6)] border rounded-md border-[#33bbcf] focus:ring-2 focus:ring-[#5ce1e6] focus:border-transparent text-gray-200 transition-all duration-300 ease-in-out"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 bg-[rgba(0,4,15,0.6)] border rounded-md border-[#33bbcf] focus:ring-2 focus:ring-[#5ce1e6] focus:border-transparent text-gray-200 transition-all duration-300 ease-in-out"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className='w-full text-center'>
                  <Button type="submit" className=" px-3 h-12 w-3/4 bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] hover:from-[#33bbcf] hover:to-[#5ce1e6] text-[rgb(0,4,15)] transition-all duration-300 ease-in-out transform hover:scale-105">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[rgba(0,4,15,0.8)] backdrop-blur-md border-t border-[#33bbcf]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © 2024 Quantum. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["Facebook", "Twitter", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-[#5ce1e6] transition-colors duration-300">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}