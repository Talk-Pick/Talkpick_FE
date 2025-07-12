import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Landing from "../pages/landing";
import Main from "../pages/main";
import MainLayout from "../layout/MainLayout";
import NavLayout from "../layout/NavLayout";
import Random from "../pages/random";
import RandomCategory from "../pages/random/category";
import CategoryDetail from "../pages/random/categoryDetail";
import Done from "../pages/random/done";
import Result from "../pages/result";
import DailyTalkPick from "../pages/dailyTopics";
import SelectedTopic from "../pages/dailyTopics/selected";
import Mypage from "../pages/myPage";
import LikedTopics from "../pages/likedTopics";
import SearchPage from "../pages/search";
import SearchResult from "../pages/search/result";
import CalendarPage from "../pages/calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        index: true,
        element: <Main />,
      },
      {
        path: "/mypage/liked-topics",
        element: <LikedTopics />,
        handle:{
          backButton: true,
        }
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
        handle: { title: "캘린더" },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/search/:keyword",
        element: <SearchResult />,
      },
      {
        element: <NavLayout />,
        children: [
          {
            path: "/random",
            element: <Random />,
            handle: { title: "대화나가기" },
          },
          {
            path: "/random/:category/:page",
            element: <RandomCategory />,
            handle: { title: "대화나가기" },
          },
          {
            path: "/random/:category/:page/:id",
            element: <CategoryDetail />,
            handle: { title: "랜덤 대화 주제 코스" },
          },
          {
            path: "/random/:category/done",
            element: <Done />,
            handle: { title: "오늘의 톡픽" },
          },
          {
            path: "/daily-talk-pick/:id",
            element: <SelectedTopic />,
            handle: { title: "오늘의 톡픽!" },
          },
         
        ],
      },

      {
        path: "/result",
        element: <Result />,
        handle: { title: "결과 확인" },
      },
      {
        path: "daily-talk-pick",
        element: <DailyTalkPick />,
      },
      {
        path:'/mypage',
        element: <Mypage />,
      }
    ],
  },
]);

export default router;