import { Collection } from "../modules/Collection";
import { Features } from "../modules/Features";
import { Hero } from "../modules/Hero";

export function MainPage() {
  return (
    <>
      <Hero />
      <Features />
      <Collection />
    </>
  );
}
