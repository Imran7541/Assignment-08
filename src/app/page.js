import Banner from "@/components/Banner";
import QurbaniTips from "@/components/QurbaniTips";
import TopAnimals from "@/components/TopAnimals";
import TopBreeds from "@/components/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-20 mb-10 ">
     <Banner/>
     <TopAnimals/>
     <QurbaniTips/>
     <TopBreeds/>
    </div>
  );
}
