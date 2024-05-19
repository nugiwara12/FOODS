import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../app/home/HomePage";
import BackTop from "../../components/BacktoTop/BacktoTop";
import Carousel from "./home/CarouselPage";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-gray-800 ">
      <Navbar />
      <HomePage />
      <Carousel />

      <BackTop />
      <Footer />
    </main>
  );
}
