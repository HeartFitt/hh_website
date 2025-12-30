import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("business","routes/business.tsx"),
  route("Personal","routes/personal.tsx"),
  route("privacy-policy","routes/privacy-policy.tsx"),
  route("heart-health-longevity","routes/heart-health-longevity.tsx")
] satisfies RouteConfig;
