import { Header } from "./components/header";
import { HeroCards } from "./components/hero-cards";
import { GenerateSection } from "./components/generate-section";
import { GalleryFooter } from "./components/gallery-footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-[10%] py-8 w-full">
        <HeroCards />
        <GenerateSection />
        <GalleryFooter />
      </main>
      <div className="bg-black text-white flex items-center justify-between w-full py-8 px-[10%]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-lg font-semibold text-white">Krea AI</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">curated by</span>
          <span className="font-semibold text-white">Mobbin</span>
        </div>
      </div>
    </>
  );
}
