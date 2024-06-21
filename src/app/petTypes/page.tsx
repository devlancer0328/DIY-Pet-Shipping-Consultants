"use client";

import { LayoutGrid } from "../../components/gallery/gallery";


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



export default function Pettypes() {
    return (
        <section id="petTypes" className="px-2 pt-5 w-full h-full scroll-mt-24">
            <div className="w-full">
                <div className="py-5 text-center items-center w-full">
                    <p className="text-5xl text-black">Pet <span className="text-[#4878D0]"> Types</span></p>
                </div>
            </div>
            <div className="h-[632px] w-full">
                <LayoutGrid cards={cards} />
            </div>
        </section>
    )
}