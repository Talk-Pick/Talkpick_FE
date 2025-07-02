import { Swiper, SwiperSlide } from "swiper/react";
import TopicCard from "../widgets/main/TopicCard";
import logo from "../assets/images/logos/logo_sm.png";
import bubble_pink from "../assets/images/contents/bubble_pink.png";
import bubble_main from "../assets/images/contents/bubble_main.png";
import { Button } from "../components/ui/button";
import Badge from "../widgets/common/Badge";
import { CATEGORIES } from "../shared/constants/categories";
import { Link } from "react-router-dom";

const Main = () => {
  return (
  <div className="flex flex-col h-full">
    <div className="flex flex-col items-center justify-center my-5">
      <img src={logo} alt="logo" className="w-1/2" />
      <p className="text-md font-bold">어색한 분위기를 풀고 싶을 때</p>
      <p className="text-md font-bold">대화가 필요할 때 톡픽!</p>
    </div>
    <main className="w-full">
    <section className="flex flex-col items-center justify-center mb-5">
      <div className="w-full flex flex-row items-center justify-between mb-5">
      <h2 className="text-2xl font-bold">오늘의 톡픽 {5}개!</h2><span>새로고침</span>
      </div>
      <Swiper
        spaceBetween={3}
        slidesPerView={1.5}
        className="w-full max-w-[400px] overflow-visible"
        style={{ overflow: "visible" }}
      >
        {CATEGORIES.map((category, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <TopicCard
              tag={category.label}
              title={category.label}
              image={<img className="h-[80px]" src={bubble_pink} alt="bubble_pink" />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className="flex flex-col justify-center">
      <div
        className=" bg-no-repeat bg-contain bg-center"
      />
      <div className="mt-3">
      <h2 className="text-2xl font-bold">오늘은 어떤 대화가 나올까</h2>
      <h2 className="text-2xl font-bold">랜덤 코스 시작!</h2>
      </div>
        <div className="bg-gray-100 w-full h-[300px] px-7 py-8 my-5"
        style={{ backgroundImage: `url(${bubble_main})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
          <p className="text-xl font-bold text-gray-500 mb-3">랜덤 대화 코스로<br/> 고민 없이 대화를 시작해요</p>
          <div className="flex flex-wrap gap-3">
            {
              CATEGORIES.map((category) => (
                <Badge key={category.label} tag={category.label} tagColor={category.color} />
              ))
            }
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/random" className="w-2/3">
      <Button className="border border-black text-gray-900 h-[50px]  w-full rounded-xl text-lg button-hover">시작하기</Button>
      </Link>
      </div>
      
    </section>
    </main>
  </div>);
};

export default Main;