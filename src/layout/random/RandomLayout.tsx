import { Outlet, useMatches, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/icons/navigation/left_arrow.svg";
import home from "../../assets/icons/navigation/home.svg";


export default function RandomLayout() {
  // useMatches로 handle에서 title 가져오기
  const matches = useMatches();
  const match = matches.find(
    (m) => (m as { handle?: { title?: string } }).handle?.title
  ) as { handle?: { title?: string } } | undefined;
  const title = match?.handle?.title ?? "";
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <img
            src={leftArrow}
            alt="뒤로가기"
            onClick={() => navigate(-1)}
          />
          <p>{title}</p>
        </div>
        <img src={home} alt="홈" className="w-6 h-6" onClick={() => navigate("/main")} />
      </nav>
      <Outlet context={{ title }} />
      <div className="flex flex-row items-center justify-center">
      <img src="/images/logos/horizontal_logo.png" alt="톡픽" className="w-[110px]" />
      </div>
    </div>
  );
}