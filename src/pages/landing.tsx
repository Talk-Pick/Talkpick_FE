import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Pagination } from "swiper/modules";
import ChatBubble from "../widgets/landing/ChatBubble";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { cardList } from "../shared/constants/card";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5, 
    },
  },
};

const bubbleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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



const Slide = ({ title, children, noPadding = false }: { title: string; children: React.ReactNode; noPadding?: boolean }) => {
  return (
    <div className={`flex flex-col items-center justify-start h-full relative ${noPadding ? '' : 'px-6'} pt-10`}>
      <div className="w-full flex-shrink-0 min-h-[80px] pt-15">
        <div className="text-center font-extrabold text-gray-900 text-2xl leading-snug whitespace-pre-line my-10 ">
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
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  // row별로 카드 분리
  const firstRowCards = cardList.filter((_, i) => i % 2 === 0);
  const secondRowCards = cardList.filter((_, i) => i % 2 === 1);
  const repeatedFirstRow = [...firstRowCards, ...firstRowCards];
  const repeatedSecondRow = [...secondRowCards, ...secondRowCards];

  const SLIDE_VIEW_COUNT = 2.5;
  const SLIDE_CONTAINER_WIDTH = 390; // 실제 슬라이드 영역의 px (w-[390px] 기준)
  const CARD_GAP = 16; // 카드 사이 gap(px)
  const CARD_HEIGHT = 200;

  const totalGap = CARD_GAP * (SLIDE_VIEW_COUNT - 1); // 16 * 1.5 = 24
  const CARD_WIDTH = (SLIDE_CONTAINER_WIDTH - totalGap) / SLIDE_VIEW_COUNT; // (390-24)/2.5 = 146.4px

  const ROW_CARD_COUNT = firstRowCards.length;
  const SLIDE_WIDTH = ROW_CARD_COUNT * (CARD_WIDTH + CARD_GAP);

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-[390px] h-[844px] relative flex items-center justify-center pb-15">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full h-full"
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide >
          <Slide title={`어색한 첫 만남,\n다들 경험 있죠?`}>
            {activeIndex === 0 && (
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                key={activeIndex}
              >
                {chatBubbles.map((bubble, idx) => (
                    <div
                      className={`w-full flex mb-10 ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                      key={idx}
                    >
                      <motion.div variants={bubbleVariants}>
                        <ChatBubble text={bubble.text} bg={bubble.bg} color="#767676" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              )}
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide title={`스몰토크, 이제\n우리가 도와드릴게요!`}>
              {activeIndex === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  key={activeIndex}
                >
                  {chatBubbles2.map((bubble, idx) => (
                      <div className={`w-full flex mb-[-7px] ${idx % 2 === 0 ? "justify-start" : "justify-end"}`} key={idx}>
                        <ChatBubble text={bubble.label} bg={bubble.bg} color={bubble.color}  />
                      </div>
                    ))}
                     <img src="/images/slide2.png" alt="스몰토크 이미지" />
                  <div>
                   
                  </div>
                </motion.div>
              )}
            </Slide>
          </SwiperSlide>
          {/* 3번째 슬라이드 (카드 예시) */}
          <SwiperSlide>
            <Slide title={`카드 하나로 대화가 술술~\n분위기 살리는 질문 카드!`} noPadding>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div
                  className="overflow-hidden w-full flex flex-col justify-center items-center"
                  style={{ height: `${CARD_HEIGHT * 2 + CARD_GAP}px` }}
                >
                  <motion.div
                    className="flex"
                    style={{ width: `${SLIDE_WIDTH * 2}px` }}
                    animate={{ x: [0, -SLIDE_WIDTH] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 12,
                      ease: "linear",
                    }}
                  >
                    {repeatedFirstRow.map((card, idx) => (
                      <img
                        key={idx}
                        src={card.src}
                        style={{
                          width: CARD_WIDTH,
                          height: CARD_HEIGHT,
                          objectFit: "cover",
                          marginLeft: idx === 0 ? 0 : CARD_GAP,
                        }}
                        alt=""
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex mt-4"
                    style={{ width: `${SLIDE_WIDTH * 2}px` }}
                    animate={{ x: [-SLIDE_WIDTH, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 12,
                      ease: "linear",
                    }}
                  >
                    {repeatedSecondRow.map((card, idx) => (
                      <img
                        key={idx}
                        src={card.src}
                        style={{ width: CARD_WIDTH, height: CARD_HEIGHT, objectFit: "cover", marginLeft: idx === 0 ? 0 : CARD_GAP / 2, marginRight: idx === repeatedSecondRow.length - 1 ? 0 : CARD_GAP / 2 }}
                        alt={card.label}
                        
                      />
                    ))}
                  </motion.div>
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
          <SwiperSlide>
            <div className="flex flex-col h-full items-center px-6 pb-20">
              <div className="flex flex-col items-center justify-center grow w-full">
                <img src="/images/bubble_orange.png" alt="smile" className="w-25 h-25" />
                <div className="text-center font-extrabold text-gray-900 text-2xl whitespace-pre-line">
                  {`지금, 어색함을\n풀러 가볼까요?`}
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Button asChild className="w-1/2 border h-[50px] rounded-xl">
                  <Link to="/login">시작하기</Link>
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