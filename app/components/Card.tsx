"use client";
import Image from "next/image";
import React from "react";
import testImage from "../../public/assets/1200px-Biblioteca-montserrat.jpg";
import { useRouter } from "next/navigation";

function GeneralCard() {
  const router = useRouter();

  const handleClick = () => {
    const id = 5;
    router.push(`/home/services/${id}`);
  };

  return (
    <div className="w-64 h-80 flex flex-col gap-2 justify-center items-center overflow-hidden bg-white hover:shadow-xl shadow-slate-600 p-2 transition-all duration-500">
      <Image src={testImage} alt="imagen_perrito.jpg" className="w-full h-44" />
      <p className="text-slate-500 font-normal text-sm text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        consectetur.
      </p>
      <button
        onClick={handleClick}
        className="py-2 w-fit mx-2 text-sm px-4 rounded-md text-slate-100 shadow-sm shadow-slate-300 bg-indigo-700 hover:scale-105 hover:bg-blue-700 transition-all duration-500"
      >
        Solicitar
      </button>
    </div>
  );
}

export default GeneralCard;
