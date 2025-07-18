import { Outlet, useNavigate } from "react-router-dom";
import { useRouteInfo } from "../shared/hooks";

export default function NavLayout() {
  const { title } = useRouteInfo();
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <img
            src="/images/icons/navigation/left_arrow.svg"
            alt="뒤로가기"
            onClick={() => navigate(-1)}
          />
          <p className="font-bold">{title}</p>
        </div>
        <img src="/images/icons/navigation/home.svg" alt="홈" className="w-6 h-6" onClick={() => navigate("/main")} />
      </nav>
      <Outlet context={{ title }} />
      <div className="flex flex-row items-center justify-center my-5">
      <img src="/images/logos/horizontal_logo.png" alt="톡픽" className="w-[110px]" />
      </div>
    </div>
  );
}