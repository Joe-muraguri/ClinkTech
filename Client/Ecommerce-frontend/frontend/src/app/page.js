"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


export default function Home() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        setProduct(response.data);

        console.log('these products', response.data);
      } catch (error) {
        console.log('Error fetching products', error);
      }
    }
    fetchProducts();
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="w-full md:w-[86%] lg:w-[86%] xl:w-[86%] mx-auto">
        <div className="hero grid grid-cols-8 grid-rows-8 gap-2.5 p-4">
          <div className="box col-span-4 row-span-full relative flex flex-col items-center justify-end p-4">
            <div className="w-full h-80 relative mb-2">

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <Image
                    src="/images/p3.jpg"
                    alt="Box 1 Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/p6.jpg"
                    alt="Box 1 Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/p9.jpg"
                    alt="Box 1 Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

          </div>
          <div className="box col-start-5 col-end-9 row-span-4 relative flex flex-col items-center justify-end p-4">
            <div className="w-full h-36 relative mb-2">
              <Image
                src="/images/p8.jpg"
                alt="Box 2 Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

          </div>
          <div className="box col-start-5 col-end-7 row-start-5 row-end-9 relative flex flex-col items-center justify-end p-4">
            <div className="w-full h-36 relative mb-2">
              <Image
                src="/images/p9.jpg"
                alt="Box 3 Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

          </div>
          <div className="box col-start-7 col-end-9 row-start-5 row-end-9 relative flex flex-col items-center justify-end p-4">
            <div className="w-full h-36 relative mb-2">
              <Image
                src="/images/p10.jpg"
                alt="Box 4 Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 m">

          {product.map((item) => (
            <>
              <div className="basis-1/5 flex justify-center">
                <div className="flex flex-wrap justify-center gap-1 p-1 bg-white-100 my-auto">
                  <div className="bg-white border border-transparent rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:border-gray-300">
                    <div className="relative w-full h-60">
                      <img
                        src={`http://127.0.0.1:8000/upload/${item.image_url}`}
                        alt="Product Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>

                      <div className="flex justify-between items-center mt-4">
                        <span className=" px-2 py-1 border border-blue-700 text-sm font-bold text-blue-700 rounded-full">Ksh {item.price}</span>
                        <button className="px-3 py-1 bg-orange-500 text-white text-sm font-small rounded hover:bg-orange-600">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          
        </div>

      </div>
    </div>
  );
}

