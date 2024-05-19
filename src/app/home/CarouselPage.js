import React from "react";
import { FaCircle } from "react-icons/fa";
import Carousel from "../../../components/Carousel/Carousel";

const slides = [
  {
    image: "/images/users/jc.jpg",
    name: "JC SARMIENTO",
    position: "Web Development",
    quotes:
      "“Web development involves creating accessible websites and applications through various disciplines like front-end, back-end, and full-stack development.”",
  },
  {
    image: "/images/users/kenji.png",
    name: "KENJI HIDAKA",
    position: "DevOps Web Server",
    quotes:
      "“DevOps focuses on automating manual tasks, repetitive processes, and deployment pipelines using automation tools and frameworks to standardize, streamline, and reduce errors in software delivery.”",
  },
  {
    image: "/images/users/reinier.png",
    name: "REINIER MERCADO",
    position: "Mobile Development",
    quotes:
      "“Developing applications using platform-specific languages and tools. For example, Swift or Objective-C for iOS development and Java or Kotlin for Android development.”",
  },
  {
    image: "/images/users/vincent.png",
    name: "VINCENT JAY GUIAO",
    position: "DevOps Web Server",
    quotes:
      "“DevOps focuses on automating manual tasks, repetitive processes, and deployment pipelines using automation tools and frameworks to standardize, streamline, and reduce errors in software delivery.”",
  },
  {
    image: "/images/users/dominic.png",
    name: "DOMINIC JUBINAL",
    position: "Mobile Development",
    quotes:
      "“Developing applications using platform-specific languages and tools. For example, Swift or Objective-C for iOS development and Java or Kotlin for Android development.”",
  },
  {
    image: "/images/users/julian.png",
    name: "JULIAN ANUNCIACION",
    position: "UI / UX",
    quotes:
      "“UI design involves creating a user-friendly, intuitive, and consistent product interface, collaborating with graphic designers, front-end developers, and stakeholders to meet user needs and business objectives.”",
  },
  {
    image: "/images/users/jc.jpg",
    name: "EDGAR TABUNDA",
    position: "Web Development",
    quotes:
      "“Web development involves creating accessible websites and applications through various disciplines like front-end, back-end, and full-stack development.”",
  },
];

const CarouselPage = () => {
  return (
    <div className="flex flex-col justify-center font-tight items-center w-3/4 mx-auto">
      <div className="py-10 mb-4">
        <h1 className="text-center text-4xl 4k:text-4xl-4k font-semibold mb-4 text-white">
          Timeline
        </h1>
      </div>
      <div className="w-full px-2 text-white">
        <Carousel autoSlide={true} autoSlideInterval={2000}>
          {slides.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className="flex justify-center items-center w-40 h-40 rounded-full object-cover mb-10"
                />
              </div>
              <div className="flex justify-center text-centerfont-bold text-2xl mb-2 transition-opacity duration-500">
                {item.name}
              </div>
              <div className="text-center text-md mb-8 transition-opacity duration-500">
                {item.position}
              </div>
              <div className="text-center text-2xl whitespace-normal py-12">
                {item.quotes}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
