import { Collection } from "../modules/Collection";
import { Costumes } from "../modules/Costumes";
import { Features } from "../modules/Features";
import { Hero } from "../modules/Hero";
import { Instagram } from "../modules/Instagram";
import { Services } from "../modules/Services";
import { StoreMag } from "../modules/StoreMag";
import { TopProduct } from "../modules/TopProduct";

export function MainPage() {
  return (
    <>
      <Hero />
      <Features />
      <Collection />
      <StoreMag />
      <TopProduct />
      <Costumes />
      <Services />
      <Instagram />
    </>
  );
}
