const ArticleCard = (props: any) => {
  const { title = "", content = "" } = props;

  return (
    <article className="flex flex-col w-full p-4 gap-2 text-black">
      <h4 className=" text-xl">{title}</h4>
      <p className="">{content}</p>
      <a className="font-medium text-lg">Learn More</a>
    </article>
  );
};

export default ArticleCard;
