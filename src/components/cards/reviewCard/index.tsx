import StarIcon from "@/components/icons/starIcon";

const ReviewCard = (props: any) => {
  const { src = "", title = "", name = "", star = 0, content = "" } = props;

  const items = [...Array(star)];

  return (
    <article className="cursor-pointer w-full h-max rounded-lg overflow-hidden ">
      <div className="bg-[#ede8e1] w-full h-max gap-9 flex flex-col items-center p-10">
        <div className="flex">
          <img loading="lazy" src={src} />
          <div className="flex flex-col gap-1">
            <h5>{title}</h5>
            <div className="flex gap-2">
              {items.map((_, index) => (
                <StarIcon key={index} className="fill-black" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 max-w-[548px] justify-center items-center">
          <h6 className=" md:text-3xl text-xl">&quot;{content}&quot;</h6>
          <p className=" text-sm uppercase">{name}</p>
        </div>
        <div>
          <a className="block max-w-[312px] md:w-[312px] w-max">
            <div className="flex transition-all h-fit w-full md:px-5 px-3 md:py-3 py-1 border-2 border-black bg-transparent items-center justify-center md:gap-1 gap-[1px] rounded-[2rem] cursor-pointer hover:text-[#fffcf8] hover:bg-black  md:text-base text-sm">
              Read 70k+ more reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                fontSize="16"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
