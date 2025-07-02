import { Link } from "react-router-dom";

interface TalkPickCardProps {
  title: string;
  image: string;
  id: string;
}

const TalkPickCard = ({
  title,
  image,
  id, 
}: TalkPickCardProps) => {
  return (
    <Link to={`/daily-talk-pick/${id}`}>
    <div className=" bg-gray-100 rounded-[32px] shadow-xl px-2 py-5 flex flex-col items-center relative">
      <div className="flex items-center justify-center mb-4 relative w-full">
        <img
          src={image}
          alt="left-bubble"
        />
      </div>
      <div className="text-center text-gray-900 text-sm font-extrabold mb-2 leading-snug">
        {title}
      </div>
    </div>
    </Link>
  );
};

export default TalkPickCard;
