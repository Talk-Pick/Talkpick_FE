import { CATEGORIES } from "../shared/constants/categories";
import CategoryCard from "../widgets/CategoryCard";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../shared/ui/scollToTop";

const Random = () => {
  const navigate = useNavigate();
  return (
  <div>
    <ScrollToTop />
    <div>
      <h2 className="text-2xl font-bold">현재 어떤 상황이신가요?</h2>
    </div>
    <div className="grid grid-cols-2 gap-5">
      {
        CATEGORIES.map((category) => (
          <CategoryCard key={category.label}
           label={category.label} image={category.image}
           cardBg={category.color}
           onClick={() => {
            navigate(`/random/${category.label}/1`);
           }}
            />
        ))
      }
    </div>
    
  </div>
  );
};

export default Random;
