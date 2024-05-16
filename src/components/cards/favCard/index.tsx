"use client";

const FavCard = (props: any) => {
  const {
    src = "",
    title = "",
    startCost = "",
    value = "",
    level = "",
    ...rest
  } = props;

  return (
    <article className="group flex flex-col gap-3 h-full cursor-pointer" {...rest}
    >
      <div className="overflow-hidden rounded-[1rem] w-full">
        <div className="w-full relative overflow-hidden rounded-[1rem]">
          <div className="transition-all duration-300 scale-100 group-hover:scale-110">
            <img loading="lazy" src={src} alt="aspect-[270/224] object-cover w-full"></img>
          </div>
          <div className="absolute transition-all w-full h-full top-0 left-0 bg-black opacity-0 group-hover:opacity-20" />
          <div className="absolute transition-all w-full h-full top-0 left-0 bg-transparent flex flex-col p-4">
            <div className="flex transition-all flex-row-reverse gap-2 -translate-y-20 group-hover:translate-y-0">
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-1">
        <div className="flex flex-col items-start">
          <p className=" leading-6 md:text-base text-xs">{title}</p>
          <p className="font-medium md:text-sm text-[11px]">
            {/* Starts from ${startCost} */}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="mt-[2px] font-medium md:text-sm text-[11px]">
              {level}
            </span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="mt-[2px] font-medium md:text-sm text-[11px]">
              {value}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FavCard;
