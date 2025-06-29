import Login from "../pages/login";
import Landing from "../pages/landing";
import { Routes, Route } from "react-router";


export const routes = (
<Routes>
  <Route index element={<Landing />} />
  <Route path="login" element={<Login />} />
</Routes>
)