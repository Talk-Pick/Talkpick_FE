import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/",
    icon: (
      // 홈 아이콘 (활성화 시 검정, 비활성화 시 회색)
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <path
          d="M4 12L14 4L24 12V22C24 22.5523 23.5523 23 23 23H5C4.44772 23 4 22.5523 4 22V12Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
        />
      </svg>
    ),
    label: "홈 화면",
  },
  {
    to: "/search",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="20" x2="25" y2="25" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: "검색",
  },
  {
    to: "/calendar",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="4" y="7" width="20" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="9" y1="4" x2="9" y2="8" stroke="currentColor" strokeWidth="2" />
        <line x1="19" y1="4" x2="19" y2="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: "캘린더",
  },
  {
    to: "/mypage",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <rect x="5" y="19" width="18" height="5" rx="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: "마이 페이지",
},
];

export default function BottomNavigator() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_8px_0_rgba(0,0,0,0.04)] z-50">
      <div className="flex justify-around items-center h-[70px] max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "flex flex-col items-center flex-1 transition-colors " +
              (isActive ? "text-gray-900 font-bold" : "text-gray-400")
            }
            end
          >
            <span className="w-7 h-7 flex items-center justify-center mb-1">
              {item.icon}
            </span>
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
