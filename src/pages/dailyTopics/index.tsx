import ScrollToTop from "../../shared/ui/scollToTop";
import TalkPickCard from "../../widgets/TalkPickCard";

const cardData = {
  title: "연애를 할 때 가장 중요하게 생각하는 것은?",
  image: "/images/cards/dating.png",
};

const DailyTalkPick = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <ScrollToTop />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-8">오늘의 톡픽!</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-5 mb-10">
        {Array.from({ length: 5 }).map((_, idx) => (
          <TalkPickCard key={idx} title={cardData.title} image={cardData.image} id={idx.toString()} />
        ))}
        <div className="text-center text-gray-400 text-sm flex items-center justify-center">마음에 드는 카드를<br /> 선택해 보세요!</div>
      </div>
    </div>
  );
};

export default DailyTalkPick;