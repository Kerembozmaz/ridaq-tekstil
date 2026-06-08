import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductGroups from "@/components/sections/ProductGroups";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductGroups />
    </main>
  );
}
