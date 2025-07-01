import ChatBubble from "../widgets/landing/ChatBubble";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  
  const chatBubbles = [
    "낯선 자리가 어색해서...",
    "무슨 말을 해야 할지 몰라서...",
    "소개팅 자리,물만 벌컥벌컥 마셨던 그 날...",
    "어떻게 대화를 이어나갈지 몰라서...",
    "침묵만 흐르던 그 순간...",
    
  ];

  // Pagination indicators
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1269:3530"
    >
      <div className="bg-white w-[390px] h-[844px] relative">
       

        {/* Main Heading */}
        <div className="w-[328px] h-[83px] top-[143px] left-8 [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-gray-900 text-[25px] text-center tracking-[0] absolute leading-[normal]">
          어색한 첫 만남,
          <br />
          다들 경험 있죠?
        </div>

        {/* Chat Bubbles */}
        {chatBubbles.map((bubble, index) => (
          <ChatBubble key={index} text={bubble} />
        ))}

        {/* Pagination Dots */}
        <div className="inline-flex items-center gap-2 absolute top-[753px] left-[174px]">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`relative w-${dot.active ? "[11px]" : "1.5"} h-1.5 ${dot.active ? "bg-[#111111]" : "bg-[#dbdbdb]"} rounded-${dot.active ? "[100px]" : "[3px]"} ${!dot.active ? "rotate-180" : ""}`}
            />
          ))}
        </div>
      </div>
      <Button>
        <Link to="/login">로그인</Link>
      </Button>
    </div>
  );
};

export default Landing;