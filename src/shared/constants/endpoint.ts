const API_VERSION = '/api/v1';

const userPaths = {
  login: "/user/login",
  signup: "/user/signup",
  logout: "/user/logout",
  check: "/user/check",
  token: "/user/token",
  refresh: "/user/refresh",
  kakao: "/members/kakao",
};
const topicPaths = {
  topic: "/topic",
  select: "/topic/select",
  keyword: "/topic/keyword",
  like: "/topic/like",
  topicId: "/topic/{topic_id}",
};



export const user = Object.fromEntries(
  Object.entries(userPaths).map(([k, v]) => [k, `${API_VERSION}${v}`])
);

export const topic = Object.fromEntries(
  Object.entries(topicPaths).map(([k, v]) => [k, `${API_VERSION}${v}`])
);
