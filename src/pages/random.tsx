import { CATEGORIES } from "../shared/constants/categories";
import CategoryCard from "../widgets/CategoryCard";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../shared/ui/scollToTop";

const Random = () => {
  const navigate = useNavigate();

  const category = CATEGORIES.map((category) => {
    return {
      label: category.label.replace('/', ","),
      image: category.image,
      color: category.color,
      labelBg: category.labelBg,
      textColor: category.textColor,
    }
  })
  return (
  <div>
    <ScrollToTop />
    <div className="flex flex-row items-center justify-center">
      <h2 className="text-xl font-bold my-8">현재 어떤 상황이신가요?</h2>
    </div>
    <div className="grid grid-cols-2 gap-5 items-center justify-center">
      {
        category.map((_category) => (
          <CategoryCard key={_category.label}
           label={_category.label} image={_category.image}
           cardBg={_category.color}
           labelBg={_category.labelBg}
           textColor={_category.textColor}
           onClick={() => {
            navigate(`/random/${_category.label}/1`);
           }}
            />
        ))
      }
    </div>
    
  </div>
  );
};

export default Random;
