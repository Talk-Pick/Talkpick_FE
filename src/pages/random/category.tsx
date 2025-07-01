import CategoryCard from "../../widgets/CategoryCard";
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
        cardBg: "bg-pink-50",
        subject: "MBTI 과팅",
        image: "heart",
      },
      {
        id: 2,
        label: "소개팅/과팅",
        cardBg: "bg-pink-50",
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
  <div>
    <h1 className="text-2xl font-bold">{order[Number(page)]}주제</h1>
    <div className="grid grid-cols-2 gap-5">
      {
        data.map((item) => (
        <CategoryCard
          label={item.label}
          cardBg={item.cardBg}
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
  )
};

export default RandomCategory;
