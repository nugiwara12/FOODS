"use client";

import { React, useState, useEffect } from "react";
import AboutUs from "./AboutUs";

const homePage = () => {
  return (
    <div>
      <section className="flex justify-center items-center h-screen bg-black py-20 text-white">
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

      <section className="bg-gray-800 py-16">
        <h1 className="text-center text-4xl font-semibold mb-4 text-white">
          Timeline
        </h1>
        <AboutUs />
      </section>

      <div className="flex flex-col items-center justify-center bg-black p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4">Service</h2>
        <p className="text-lg text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit
          id turpis vestibulum consequat nec sed arcu.
        </p>

        <div class="flex flex-wrap ">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2 my-2 hover:bg-yellow-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img
              class="w-full"
              src="/images/logo/logo.png"
              alt="Placeholder image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Menu browsing</div>
              <p class="text-base">
                Allowing users to browse through menus of different restaurants,
                view dishes, ingredients, prices, and special offers.
              </p>
            </div>
            <div class="px-6 py-4 text-white">
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag1
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag2
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold">
                #tag3
              </span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2 my-2 hover:bg-yellow-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img
              class="w-full"
              src="/images/logo/logo.png"
              alt="Placeholder image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Order placement</div>
              <p class="text-base">
                Enabling users to place orders for delivery or pickup. This
                involves selecting items from the menu, specifying quantities,
                customizing options (like toppings or sides), and providing
                delivery details.
              </p>
            </div>
            <div class="px-6 py-4 text-white">
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag1
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag2
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold">
                #tag3
              </span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2 my-2 hover:bg-yellow-700 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img
              class="w-full"
              src="/images/logo/logo.png"
              alt="Placeholder image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Payment processing</div>
              <p class="text-base">
                Handling secure transactions for payments, including options for
                credit/debit cards, digital wallets, or cash on delivery.
              </p>
            </div>
            <div class="px-6 py-4 text-white">
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag1
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold mr-2">
                #tag2
              </span>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold">
                #tag3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
