"use client";

import { React, useState, useEffect } from "react";

const homePage = () => {
  return (
    <div>
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Food<span className="text-yellow-500">Hub</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover amazing recipes from around the world.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Explore Recipes
          </a>
        </div>
      </section>
      {/* Featured Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sample Recipe Card (Repeat as necessary) */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/500"
                alt="Recipe Image"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Delicious Dish</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="block mt-4 bg-gray-800 text-white font-semibold py-2 px-4 rounded-full text-center"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homePage;
