import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../app/home/HomePage";
import BackTop from "../../components/BacktoTop/BacktoTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />

      <BackTop />
    </main>
  );
}
