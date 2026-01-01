import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import Banner from "~/Components/Banner";
import PopularCatagories from "~/Components/PopularCatagories";
import RecentProducts from "~/Components/RecentProducts";
import Microscope from "~/Components/Microscope";
import Ventilation from "~/Components/Ventilation";
import AskedMe from "~/Components/AskedMe";

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
      <Microscope></Microscope>
      <Ventilation></Ventilation>
      <AskedMe></AskedMe>
    </>
  );
}
