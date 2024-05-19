import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../app/home/HomePage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
    </main>
  );
}
