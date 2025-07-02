import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ChatBubble from "../widgets/landing/ChatBubble";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const chatBubbles = [
  {text:"낯선 자리가 어색해서...",bg:"#e3e3e3"},
  {text:"무슨 말을 해야 할지 몰라서...",bg:"#d6d6d6"},
  {text:"소개팅 자리,물만 벌컥벌컥 마셨던 그 날...",bg:"#b0b0b0"},
  {text:"어떻게 대화를 이어나갈지 몰라서...",bg:"#e3e3e3"},
  {text:"침묵만 흐르던 그 순간...",bg:"#ececec"},
];

const chatBubbles2 = [
  { label: "연애를 할 때 가장 중요하게 생각하는 것은?", bg: "#fce7f3", color: "#db2777" },
  { label: "요즘 관심사는 취미는?", bg: "#dcfce7", color: "#16a34a" },
  { label: "무인도에 하나만 가져갈 수 있다면?", bg: "#fef9c3", color: "#ca8a04" },
  { label: "첫인상, 자주 듣는 말은?", bg: "#f3e8ff", color: "#9333ea" },
  { label: "MBTI 야구 게임", bg: "#dbeafe", color: "#2563eb" },
];



const Slide = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-start h-full relative px-6 pt-10">
      <div className="w-full flex-shrink-0 min-h-[80px] pt-15">
        <div className="text-center font-extrabold text-gray-900 text-[25px] leading-snug whitespace-pre-line my-10 ">
          {title}
        </div>
      </div>
      {/* 아래 컨텐츠: 남은 공간 */}
      <div className="flex flex-col w-full items-start flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-[390px] h-[844px] relative flex items-center justify-center pb-15">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full h-full"
          modules={[Pagination]}
        >
          {/* 1번째 슬라이드 */}
          <SwiperSlide>
          <Slide title={`어색한 첫 만남,\n다들 경험 있죠?`}>
              {chatBubbles.map((bubble, idx) => (
                  <div className={`w-full flex mb-10 ${idx % 2 === 0 ? "justify-start" : "justify-end"}`} key={idx}>
                    <ChatBubble text={bubble.text} bg={bubble.bg} color="#767676"  />
                  </div>
                ))}
                </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide title={`스몰토크, 이제\n우리가 도와드릴게요!`}>
              {chatBubbles2.map((bubble, idx) => (
                  <div className={`w-full flex mb-[-7px] ${idx % 2 === 0 ? "justify-start" : "justify-end"}`} key={idx}>
                    <ChatBubble text={bubble.label} bg={bubble.bg} color={bubble.color}  />
                  </div>
                ))}
                 <img src="/images/slide2.png" alt="스몰토크 이미지" />
              <div>
               
              </div>
            </Slide>
          </SwiperSlide>
          {/* 3번째 슬라이드 (카드 예시) */}
          <SwiperSlide>
            <Slide title={`카드 하나로 대화가 술술~\n분위기 살리는 질문 카드!`}>
            <div className="flex flex-col items-center justify-center h-full px-6">
              <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                {/* 카드 예시: 실제 이미지는 프로젝트에 맞게 교체 */}
                <div className="w-[90px] h-[120px] bg-pink-200 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-md">#게임</div>
                <div className="w-[90px] h-[120px] bg-blue-200 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-md">#여행</div>
                <div className="w-[90px] h-[120px] bg-yellow-200 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-md">#VS</div>
                <div className="w-[90px] h-[120px] bg-red-200 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-md">#최양</div>
              </div>
            </div>
            </Slide>
          </SwiperSlide>
          {/* 4번째 슬라이드 (카테고리/랜덤코스) */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full px-6">
              <div className="text-center font-extrabold text-gray-900 text-[23px] mt-24 mb-6 whitespace-pre-line">
                {`랜덤 대화 코스로\n고민 없이 대화를 시작해요`}
              </div>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {/* 카테고리 예시: 실제 이미지는 프로젝트에 맞게 교체 */}
                <div className="bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-bold">연인</div>
                <div className="bg-green-100 text-green-600 rounded-full px-4 py-2 text-sm font-bold">룸메 첫 만남</div>
                <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-bold">동료</div>
                <div className="bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 text-sm font-bold">가족</div>
                <div className="bg-orange-100 text-orange-600 rounded-full px-4 py-2 text-sm font-bold">소개팅/과팅</div>
                <div className="bg-purple-100 text-purple-600 rounded-full px-4 py-2 text-sm font-bold">친구</div>
                <div className="bg-sky-100 text-sky-600 rounded-full px-4 py-2 text-sm font-bold">그룹 첫 모임</div>
                <div className="bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-sm font-bold">기타</div>
              </div>
            </div>
          </SwiperSlide>
          {/* 5번째 슬라이드 (마지막, 버튼 포함) */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full px-6">
              <div className="flex flex-col items-center mt-32">
                <div className="bg-orange-200 rounded-full w-[70px] h-[70px] flex items-center justify-center mb-6">
                  <span className="text-3xl">😊</span>
                </div>
                <div className="text-center font-extrabold text-gray-900 text-[23px] mb-8 whitespace-pre-line">
                  {`지금, 어색함을\n풀러 가볼까요?`}
                </div>
                <Button asChild className="w-[220px] h-[50px] text-lg rounded-xl font-bold">
                  <Link to="/main">시작하기</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Landing;