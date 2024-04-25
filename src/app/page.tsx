import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import Testinomial from "./components/testinomial";
import Statistic from "./components/statistic";
import Contact from "./contact";
import Landing from "./components/landing";

export default function Home() {
  return (
   <div>
    <Landing/>
    <Hero/>
    <Statistic/>
    <Services/>
    <Testinomial/>
<Contact/>
   </div>
  );
}
