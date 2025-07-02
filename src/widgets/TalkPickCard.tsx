interface TalkPickCardProps {
  title: string;
  image: string;
}

const TalkPickCard = ({
  title,
  image,
}: TalkPickCardProps) => {
  return (
    <div className=" bg-gray-100 rounded-[32px] shadow-xl px-2 py-5 flex flex-col items-center relative">
      <div className="flex items-center justify-center mb-4 relative w-full">
        <img
          src={image}
          alt="left-bubble"
        />
      </div>
      {/* 제목 */}
      <div className="text-center text-gray-900 text-sm font-extrabold mb-2 leading-snug">
        {title}
      </div>
    </div>
  );
};

export default TalkPickCard;
