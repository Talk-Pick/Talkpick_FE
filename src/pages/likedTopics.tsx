import TopicVerticalCard from "../widgets/cards/TopicVerticalCard";
import { Button } from "../components/ui/button";
// import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const likedTopics = [
  {
    tags: [
      { label: "소개팅", color: "bg-pink-100 text-pink-500" },
      { label: "# 연애", color: "text-pink-400" },
    ],
    title: "연애를 할 때 가장 중요하게 생각하는 것은?",
    count: "34개",
    time: "25분",
    bgColor: "#fff1f5",
  },
  {
    tags: [
      { label: "그룹 첫 모임", color: "bg-yellow-100 text-yellow-600" },
      { label: "# 게임", color: "text-yellow-500" },
    ],
    title: "MBTI 야구게임",
    count: "34개",
    time: "25분",
    bgColor: "#fffbe7",
  },
  {
    tags: [
      { label: "키워드/카테고리", color: "bg-orange-100 text-orange-500" },
      { label: "# 여행", color: "text-blue-400" },
    ],
    title: "연애를 할 때 가장 중요하게 생각하는 것은?",
    count: "34개",
    time: "25분",
    bgColor: "#fff7f0",
  },
];


const SuggestCard = ({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <div className="bg-gray-100 rounded-2xl box-shadow shadow-lg px-6 py-5 mb-4 flex flex-col items-center">
    <div className="font-bold text-base mb-2 text-center break-words mx-11">{title}</div>
    <div className="text-gray-500 text-sm mb-4 text-center">{description}</div>
    <Button onClick={onClick} className="border border-gray-900">보러가기</Button>
  </div>
);


const LikedTopicsPage = () => {
  const navigate = useNavigate();

  // const likedTopics = useQuery({
  //   queryKey: ["likedTopics"],
  //   queryFn: () => getLikedTopics(),
  // });
  return (
    <div className="mx-6">
      <div className="flex items-center mb-6">
        <h1 className="text-xl font-bold text-center flex-1">좋아요 누른 대화 주제</h1>
      </div>
      <div className="flex flex-col">
        {likedTopics.length ? likedTopics.map((topic, idx) => (
          <TopicVerticalCard key={idx} {...topic} />
        )) : (
          <div className=" flex flex-col items-center justify-center bg-white">
            <img
              src="/images/ellipsis.png"
              alt="아직 좋아요 누른 주제가 없어요"
              className="w-[90px] mb-6"
            />
            {/* 안내 텍스트 */}
            <div className="text-center mb-8">
              <div className="font-bold text-lg mb-1">아직 좋아요 누른 주제가 없어요</div>
              <div className="text-gray-400 text-base">지금 바로 좋아요 누르러 가볼까요?</div>
            </div>
            {/* 카드 3개 */}
            <div className="w-full flex flex-col gap-4">
              <SuggestCard
                title="오늘의 톡픽 5개!"
                description=""
                onClick={() => navigate("/daily-talk-pick")}
              />
              <SuggestCard
                title="대중들의 픽, 좋아요를 가장 많이 받은 주제 모아보기"
                description=""
                onClick={() => {/* 이동 로직 */ }}
              />
              <SuggestCard
                title="랜덤 주제로 진행하는 것도 묘미 랜덤 주제 코스"
                description=""
                onClick={() => navigate("/random")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedTopicsPage;
