import About from "@/modules/home/components/About";
import ContactUs from "@/modules/home/components/ContacUs";
import Hero from "@/modules/home/components/Hero";
import Pricing from "@/modules/home/components/Pricing";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Pricing />
      <ContactUs />
    </main>
  );
}
