import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import Banner from "~/Components/Banner";
import PopularCatagories from "~/Components/PopularCatagories";
import RecentProducts from "~/Components/RecentProducts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <PopularCatagories></PopularCatagories>
      <RecentProducts></RecentProducts>
    </>
  );
}
