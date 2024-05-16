"use client";

import React, { useState, useEffect, useRef } from "react";
import DownArrowIcon from "../icons/downArrowIcon";
import ReactStars from "react-stars";

const Dropdwon = (props: any) => {
  const { type = "", placeholder = "", onChange, values = [] } = props;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(null);
  const listBox = useRef<HTMLDivElement | null>(null);

  const onSelectChange = (e: any, index: number) => {
    setVisible(false);
    setValue(e);
    onChange({ value: e, index: index });
    // setValue(value === e ? null : e);
    // onChange({ value: value === e ? null : e, index: index });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (listBox.current && !listBox.current.contains(event.target as Node)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-[220px] flex flex-col relative">
      <div
        className="group transition-all h-10 w-full rounded-[7px] border-[2px] border-black bg-transparent flex p-2 max-w-[220px] justify-between items-center cursor-pointer hover:border-[#00000080]"
        onClick={() => setVisible(!visible)}
      >
        {value ? (
          type === "rate" && value != "All" ? (
            <ReactStars value={value} edit={false} />
          ) : (
            <span className="transition-all text-black group-hover:text-[#00000080] text-[13px]  leading-[1.54] text-ellipsis	overflow-hidden whitespace-nowrap">
              {value}
            </span>
          )
        ) : (
          <span className="transition-all text-black group-hover:text-[#00000080] text-[13px]  leading-[1.54] text-ellipsis	overflow-hidden whitespace-nowrap">
            {placeholder}
          </span>
        )}
        <DownArrowIcon className="transition-all text-black scale-125 group-hover:text-[#00000080]" />
      </div>
      <div
        ref={listBox}
        className={`transition-all duration-500 w-full max-w-[220px] absolute top-[40px] overflow-hidden z-20 ${visible ? "h-[300px]" : "h-0"
          }`}
      >
        <ul className="p-1 flex flex-col gap-[2px] w-full shadow-lg bg-slate-100 text-[13px]">
          <li
            className=" transition-all h-[34px] bg-slate-100 hover:bg-slate-200 w-full flex p-2 cursor-pointer items-center"
            onClick={() => onSelectChange("All", -1)}
          >
            All
          </li>
          {type === "rate"
            ? Array.from({ length: 5 }, (_, index) => {
              return (
                <li
                  key={index}
                  className="transition-all h-[34px] bg-slate-100 hover:bg-slate-200 w-full flex p-2 cursor-pointer items-center"
                  onClick={() => onSelectChange(5 - index, index)}
                >
                  <ReactStars value={5 - index} edit={false} />
                </li>
              );
            })
            : values.map((value: any, index: number) => {
              return (
                <li
                  key={index}
                  className="transition-all h-[34px] bg-slate-100 hover:bg-slate-200 w-full flex p-2 cursor-pointer items-center"
                  onClick={() => onSelectChange(value, index)}
                >
                  {value}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdwon;
