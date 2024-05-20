"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import BackTop from '../../../components/BacktoTop/BacktoTop';
import PageOffer from "@/app/service/pageOffer";


const Service = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-8">
            We provide top-notch services to help you achieve your goals.
          </p>
          <a
            href="#services"
            className="bg-yellow-600 text-white py-2 px-4 rounded shadow hover:bg-yellow-700"
          >
            Learn More
          </a>
        </div>
      </section>
      <PageOffer />
      <BackTop />
      <Footer />
    </div>
  );
};

export default Service;