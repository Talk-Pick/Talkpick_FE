import TopicVerticalCard from "../widgets/cards/TopicVerticalCard";
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

const LikedTopicsPage = () => {
  return (
    <div className="min-h-screen bg-white max-w-[430px] mx-auto flex flex-col">
      <div className="flex items-center mb-6">
        <h1 className="text-xl font-bold text-center flex-1">좋아요 누른 대화 주제</h1>
      </div>
      <div className="flex flex-col">
        {likedTopics.length > 0 ? likedTopics.map((topic, idx) => (
          <TopicVerticalCard key={idx} {...topic} />
        )) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">좋아요 누른 대화 주제가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedTopicsPage;
