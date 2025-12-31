// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

//Create New Routes
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [

    layout("Layouts/PincipleLayout.tsx", [
        index("routes/home.tsx"),
        // route("about", "./about.tsx"),
        // route("login", "./auth/login.tsx"),
        // route("register", "./auth/register.tsx"),
    ]),
] satisfies RouteConfig;

