import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BackTop from "../../../components/BacktoTop/BacktoTop";

const page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
    <header className="bg-black text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">About
            <span className="font-bold text-yellow-700">FoodHub</span>
            </h1>
          <p className="mt-2">Your Gateway to Culinary Delights</p>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At FoodHub, our mission is to bring fresh, delicious, and diverse food
            options to your doorstep. We believe in the power of good food to bring
            people together, create joy, and enhance well-being. Our commitment is
            to provide the highest quality ingredients and an unparalleled culinary
            experience for all our customers.
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white ">
              <img
                src="/images/users/jc.jpg"
                alt="Jc Sarmiento"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Jc Sarmiento</h3>
              <p className="text-center font-bold">Web Development</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/reinier.png"
                alt="Renier Mercado"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Renier Mercado</h3>
              <p className="text-center font-bold">Mobile Development</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/julian.png"
                alt="Julian Anunciacion"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Julian Anunciacion</h3>
              <p className="text-center font-bold">Marketing Director</p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/vincent.png"
                alt="Vincent Jay Guiao"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Vincent Jay Guiao</h3>
              <p className="text-center font-bold">DeVops Web Server</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/kenji.png"
                alt="Kenji Hidaka"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Kenji Hidaka</h3>
              <p className="text-center font-bold">DeVops Web Server</p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/dominic.png"
                alt="Dominic Jubinal"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Dominic Jubinal</h3>
              <p className="text-center font-bold">Mobile Development</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg text-white hover:bg-yellow-800 hover:text-white">
              <img
                src="/images/users/edgar.png"
                alt="Edgar Tabunda"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <h3 className="text-center text-xl font-semibold mt-10">Edgar Tabunda</h3>
              <p className="text-center font-bold">Web Development</p>
            </div>

          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Quality:</strong> We prioritize the highest quality in
              everything we do, from our ingredients to our customer service.
            </li>
            <li>
              <strong>Integrity:</strong> We conduct our business with honesty and
              integrity, ensuring transparency and trust with our customers and
              partners.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace innovation to bring the best
              and most exciting food experiences to our customers.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to sustainable
              practices that protect our planet and support local communities.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
      <BackTop />
    </div>
  );
};

export default page;
