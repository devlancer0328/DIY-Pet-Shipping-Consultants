const NeedCard = (props: any) => {
  const { src = "", content = "" } = props;

  return (
    <article className="cursor-pointer w-full h-full rounded-lg overflow-hidden">
      <div
        className="bg-cover bg-center w-full h-full text-[#fffcf8] flex justify-center items-center  text-3xl"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${src})`,
        }}
      >
        {content}
      </div>
    </article>
  );
};

export default NeedCard;
