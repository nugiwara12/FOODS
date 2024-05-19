"use client";

import React, { useState, useEffect } from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div className="flex justify-center mt-0 mb-0 md:mb-80 md:mt-24">
      <div className="container mx-auto px-4 md:px-0 py-2 rounded-lg transition-all">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="mb-8 md:mb-0 ">
            <img
              src="/images/logo/food-logo.png"
              alt="Contact Image"
              className="max-w-full h-auto md:max-h-[600px] rounded-lg hover:scale-125 transition-transform duration-300"
            />
          </div>

          <div className="container pl-0 md:pl-48">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white font-tight text-[12px]">
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                  <h3 className="font-bold font-tight text-lg mb-1 text-end">
                    Conceptualization
                  </h3>
                  <p className="leading-tight text-start md:text-right">
                    The task involves defining the scope and goals of a
                    food-ordering system, conducting market research to
                    understand user needs and competitor landscape, and creating
                    a project plan.
                  </p>
                </div>
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-10 pointer-events-none" />
                    </div>
                    <div className="flex w-6 h-6 absolute top-1/2 -mt-12 md:-mt-8 rounded-full bg-black text-white shadow items-center justify-center">
                      <RiNumber1 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-10 pointer-events-none" />
                  </div>
                  <div className="flex w-6 h-6 absolute top-1/2 -mt-20 md:-mt-12 rounded-full bg-black text-white shadow items-center justify-center">
                    <RiNumber2 />
                  </div>
                </div>
                <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                  <h3 className="font-semibold font-tight text-lg mb-1">
                    Requirements Gathering
                  </h3>
                  <p className="leading-tight text-justify">
                    Gather stakeholder requirements, define features,
                    functionalities, and technical specifications, and
                    prioritize them based on importance and feasibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse md:contents">
                <div className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                  <h3 className="font-semibold font-tight text-lg mb-1 text-start md:text-end">
                    Design Phase
                  </h3>
                  <p className="leading-tight text-start md:text-right">
                    The project involves designing the platform's UI and UX,
                    creating wireframes and prototypes, designing the database
                    schema and system architecture, and developing the
                    platform's branding and visual identity.
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 pointer-events-none" />
                  </div>
                  <div className="flex w-6 h-6 absolute top-1/2 -mt-10 md:-mt-8 rounded-full bg-black text-white shadow items-center justify-center">
                    <RiNumber3 />
                  </div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 pointer-events-none" />
                  </div>
                  <div className="flex w-6 h-6 absolute top-1/2 -mt-20 md:-mt-12 rounded-full bg-black text-white shadow items-center justify-center">
                    <RiNumber4 />
                  </div>
                </div>
                <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                  <h3 className="font-semibold font-tight text-lg mb-1">
                    Development
                  </h3>
                  <p className="leading-tight text-justify">
                    Develop frontend and backend systems using HTML, CSS,
                    JavaScript, Node.js, Django, Laravel, secure payment
                    gateways, menu browsing, order placement, user
                    authentication, and test for functionality and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
