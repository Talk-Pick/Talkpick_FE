import TopicCard from "../../widgets/cards/TopicCard";
import { useNavigate, useParams } from "react-router-dom";

const RandomCategory = () => {
  const { page, category } = useParams();
  const navigate = useNavigate();
  const order = [
    "",
    "첫번째",
    "두번째",
    "세번째",
    "네번째",
    "다섯번째",
  ]
  const data = [
      {
        id: 1,
        label: "소개팅/과팅",
        
        subject: "MBTI 과팅",
        image: "heart",
      },
      {
        id: 2,
        label: "소개팅/과팅",
        subject: "MBTI 과팅",
        image: "heart",
      },
      {
        id: 3,
        label: "소개팅/과팅",
        subject: "MBTI 과팅",
        image: "heart",
      },
      {
        id: 4,
        label: "소개팅/과팅",
        subject: "MBTI 과팅",
        image: "heart",
      },
      
  ]

  return (
  <div  className="flex flex-col">
    <div className="flex justify-center my-8">
    <h1 className="text-2xl font-bold">{order[Number(page)]}주제</h1>
    </div>
    <div className="flex justify-center my-8 w-full">
    <div className="grid grid-cols-2 gap-5 w-full">
      {
        data.map((item) => (
        <TopicCard
          label={item.label}
          subject={item.subject}
          image={item.image}
          onClick={() => {
            navigate(`/random/${category}/${page}/${item.id}`);
          }}
        />
      ))
    }
    </div>
    </div>
  </div>
  )
};

export default RandomCategory;
