"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PropertyTypes } from "@/lib/types";
import { getAllDetails } from "@/lib/dbOperations";
import { imgUrl } from "@/lib/axiosInstance";
import { clientFeedback, property } from "@/lib/data";

const Home = () => {
  const router = useRouter();
  const [toggledItem, setToggledItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [properties, setProperties] = useState<PropertyTypes[]>([]);

  const toggleDescription = (itemId: any) => {
    if (toggledItem === itemId) {
      setToggledItem(null);
    } else {
      setToggledItem(itemId);
    }
  };
  const fetchProperties = async () => {
    const data = await getAllDetails({ uri: "properties" });
    setProperties(data);
  };
  useEffect(() => {
    fetchProperties();
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === clientFeedback.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId);
  }, [clientFeedback.length]);

  return (
    <div>
      <div className="w-full h-96 py-28 md:h-auto bg-gradient-to-r from-cyan-100 to-cyan-300 flex  justify-around items-center">
        <div className="max-w-64 p-5 md:max-w-96 flex flex-col gap-5 items-start">
          <h1 className="text-xl md:text-5xl md:font-semibold leading-relaxed ">
            Your Gateway to Dream Homes
            <span className="text-sky-600 px-4">
              Unlocking Your Real Estate Dreams
            </span>
          </h1>
          <p>
            Explore the opportunities in real estate and unlock the door to your
            dream home! Expand your horizons with our comprehensive real estate
            services.
          </p>

          <Button
            className="bg-amber-700"
            onClick={() => router.push("/buyer/contact")}
          >
            Contact Now <ArrowRight className="px-1 font-bold text-2xl" />
          </Button>
        </div>
        <div className="">
          <img src="/house2.jpeg" alt="logo" className="w-32 h-96 md:w-auto " />
        </div>
      </div>

      <div className=" h-1/3 w- md:p-16 p-5 flex flex-col lg:flex-row justify-center items-start gap-6 relative">
        <div className="relative pb-20">
          <div>
            <img
              src="/house.jpg"
              alt="home2"
              className="min-w-48 h-48 md:min-w-96 md:h-56 rounded-xl"
            />
          </div>
          <div className=" absolute top-14 md:left-52 md:top-24 left-28 bg-white p-2 rounded-xl ">
            <img
              src="/house2.jpeg"
              alt="home2"
              className="sm:min-w-48 h-40 md:min-w-56 min-w-40 rounded-xl"
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-2 mt-4 justify-start  items-start">
          <p className="text-blue-500 font-semibold text-xl lg:ml-20  xl:ml-0">
            Explore Our Realty Firm
          </p>
          <h1 className="text-2xl font-bold lg:ml-20 xl:ml-0 ">
            Welcome to Dreamland Real Estate Agency
          </h1>
          <p className="lg:ml-20 mt-2">
            Collaboratively simplify user-friendly networks to provide efficient
            real estate solutions. We focus on coordinating effective methods of
            property empowerment, targeting niche markets and pursuing market
            positioning. Our expertise lies in web-readiness for resourceful
            property applications, ensuring client empowerment across diverse
            real estate markets.
          </p>

          <Button
            className="bg-amber-700 lg:ml-20 mt-5"
            onClick={() => router.push("/buyer/about")}
          >
            About More
          </Button>
        </div>
      </div>

      <div className="className h-1/6 bg-gradient-to-r from-cyan-100 to-cyan-300 p-5 s">
        <h1 className="text-2xl font-semibold text-center">
          Explore Our Range of{" "}
          <a href={"/listings"} className="text-sky-400">
            Properties to Begin
          </a>
        </h1>
        <div className="flex flex-row justify-center flex-wrap py-3 gap-7 my-3">
          {property.map((item, index) => (
            <div className={`max-w-56 rounded-xl `} key={index}>
              <img src={item.image} alt="home4" className="w-56 h-56" />
              <div className="px-5 py-3 bg-white rounded-b-xl mb-5">
                <div className="flex justify-between items-center font-bold">
                  <h1>{item.course}</h1>
                  <div className="" onClick={() => toggleDescription(index)}>
                    {toggledItem === index ? <Minus /> : <Plus />}
                  </div>
                </div>
                <div className="">
                  {toggledItem === index && <p>{item.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 pb-24 flex flex-col md:flex-row items-start justify-center gap-7 px-2">
        <div className="md:p-5">
          <video
            src="video.mp4"
            controls
            className="md:w-72 w-screen h-72 rounded-lg"
          />
        </div>
        <div className="gap-3 flex flex-col p-5">
          <p className="text-blue-500">
            Discover Life in Our Real Estate Community
          </p>
          <h1 className="font-semibold text-2xl">
            Explore Our Property Gallery
          </h1>
          <div className="flex gap-5 mt-5 flex-wrap relative justify-center">
            <img
              src="house.jpg"
              alt="home5"
              className="w-44 h-44 rounded-lg object-fit"
            />
            <img src="house.jpg" alt="home5" className="w-44 h-44 rounded-lg" />
            <img
              src="house.jpg"
              alt="home5"
              className="w-44 h-44 rounded-lg opacity-80"
            />
            <a
              href="/gallery"
              className="text-white hover:text-blue-600 absolute right-16 top-20 text-2xl "
            >
              View
            </a>
          </div>
        </div>
      </div>

      <div className="w-full p-5 md:relative py-14 pt-12 h-1/2 bg-gradient-to-r from-cyan-100 to-cyan-300  flex flex-col items-center justify-center gap-2">
        <div className="bg-white shadow-2xl w-8/12 h-auto  flex flex-row flex-wrap justify-around py-2 items-center gap-7 rounded-xl md:absolute top-[-40px] ">
          <div className="flex flex-col justify-center items-center max-w-36 ">
            <h1 className="text-2xl font-bold">3.9k+</h1>
            <p className="text-sm">Successful Transactions</p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-36 ">
            <h1 className="text-2xl font-bold">15.8k+</h1>
            <p className="text-sm">Properties Listed</p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-36 ">
            <h1 className="text-2xl font-bold">97.5k+</h1>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-36">
            <h1 className="text-2xl font-bold">100.2k+</h1>
            <p className="text-sm">Satisfied Customers</p>
          </div>
        </div>

        <p className="font-medium text-sky-400 text-lg pt-5">
          Client Testimonials
        </p>
        <h1 className="text-4xl font-semibold text-black-400 text-center">
          Hear From Our Satisfied Customers
        </h1>
        <div className="w-full ">
          <div className="flex justify-center mt-6 w-[90%] flex-wrap px-10 ">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className=" px-10 w-screen"
            >
              <CarouselContent className="w-screen md:px-24">
                {clientFeedback.map((item, index) => (
                  <CarouselItem className=" flex flex-col justify-center md:basis-1/2 lg:basis-1/3 p-10">
                    <div className="bg-white p-4  flex flex-col gap-2 rounded ">
                      <div className=" gap-3">
                        <img
                          key={index}
                          src={item.image}
                          alt="customer"
                          className=" rounded"
                        />
                        <div className="flex flex-col ">
                          <h1 className="text-xl font-semibold">{item.name}</h1>
                          <p className="text-blue-500">{item.profession}</p>
                        </div>
                      </div>
                      <p>{item.feedback}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Latest News Updates */}
      <div className="py-10 flex flex-col md:items-center md:flex-row  justify-center gap-7 ">
        <div className="gap-3 flex flex-col items-center pt-3 w-[99%] ">
          <h1 className="font-semibold text-2xl">Latest Property Updates</h1>
          <p className="text-blue-500 text-xl font-semibold">
            Stay Informed with the Latest Property News
          </p>
          <div className="w-full">
            <div className="flex justify-center mt-6  flex-wrap px-10 w-[98%]">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className=" px-10 w-screen"
              >
                <CarouselContent>
                  {properties &&
                    properties.map((item, index) => (
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <div className=" flex flex-col gap-2 rounded-xl shadow-2xl">
                          <div className="">
                            <img
                              key={index}
                              src={`${imgUrl}${item.image}`}
                              alt="events"
                              className="w-80 h-72 rounded-t-xl"
                            />
                          </div>
                          <div className=" max-w-80 p-1">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm  w-40">{item.description}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <Button
            className="mt-3 "
            onClick={() => router.push("/newsAndUpdates")}
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
