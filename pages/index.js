import Head from "next/head";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { data } from "../data";
import React from "react";

export default function Home() {
  const [people, setPeople] = React.useState(0);

  return (
    <div>
      <Head>
        <title>Slider Page</title>
        <meta name="slider" content="" />
      </Head>
      <div className="flex mt-5 text-lg justify-center  lg:mt-20 lg:text-4xl font-medium">
        <h1 className="text-yellow-700 mr-4 ">/</h1>
        <h1 className="text-center text-gray-700">Reviews</h1>
      </div>
      <div className="flex justify-center mt-16 ">
        <ChevronLeftIcon
          className="h-8 cursor-pointer bg-gray-400 rounded-md mr-3 self-center mt-16"
          onClick={() =>
            people >= data.length - 1
              ? setPeople(people - 3)
              : setPeople(people + 1)
          }
        />
        <div
          key={data[people].id}
          className="flex flex-col justify-center items-center text-gray-500 w-1/2"
        >
          <Image
            src={data[people].image}
            alt="pic"
            width={150}
            height={150}
            layout="fixed"
            className="border-solid object-cover  rounded-full  border-8 border-gray-800"
          />
          <h1 className="text-center text-lg mt-5 text-yellow-700">
            {data[people].name}
          </h1>
          <h4 className="text-center ">{data[people].position}</h4>
          <p className="text-center mt-5">{data[people].description}</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="icon text-yellow-700 text-4xl mt-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </div>
        <ChevronRightIcon
          className="h-8 cursor-pointer bg-gray-400 rounded-md ml-3 self-center mt-16"
          onClick={() =>
            people <= data.length - 4
              ? setPeople(people + 3)
              : setPeople(people - 1)
          }
        />
      </div>
    </div>
  );
}
