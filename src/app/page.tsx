import Image from "next/image";
import { NavBar, Hero, About, Portfolio } from "@/components";
export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Portfolio/>
    </>
  );
}
