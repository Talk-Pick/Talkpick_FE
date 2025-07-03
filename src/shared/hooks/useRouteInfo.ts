import { useLocation, useMatches, type UIMatch } from "react-router-dom";

interface RouteHandle {
  title?: string;
  backButton?: boolean;
  requiresAuth?: boolean;
}

export const useRouteInfo = () => {
  const matches = useMatches();
  const currentPath = useLocation().pathname;


  const currentMatch = matches.find(
    (m) => (m as UIMatch<unknown, RouteHandle>).pathname === currentPath
  ) as UIMatch<unknown, RouteHandle> | undefined;
  
  const handle = currentMatch?.handle;
  
  return {
    title: handle?.title ?? "",
    backButton: handle?.backButton ?? false,
    requiresAuth: handle?.requiresAuth ?? false,
    handle: handle || {},
  };
}; 