import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("business","routes/business.tsx"),
  route("Personal","routes/personal.tsx")
] satisfies RouteConfig;
