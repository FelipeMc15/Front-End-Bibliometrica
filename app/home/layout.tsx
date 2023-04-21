"use client";
import React, { useState } from "react";
import { HomeDropDown } from "./components/HomeDropDown";
import { privateRoutes } from "routes/routes.models";
import "./scrollbar.style.css";
import Link from "next/link";
export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideItems = [
    {title: "Trámite de documentos" , url:`${privateRoutes.Home}${privateRoutes.Documents}`},
    {title: "Solicitud de servicios" , url:`${privateRoutes.Home}${privateRoutes.Services}`},
    {title: "Base de datos" , url:`${privateRoutes.Home}${privateRoutes.DataBase}`}
  ];

  const dropItems = {
    title: "DropDown",
    items: ["testItem", "testItem", "testItem", "testItem"],
  };

  const [open, setopen] = useState(false);

  return (
    <div className="w-full ">
      <nav className="fixed top-0 pl-[13rem] p-6 flex flex-row justify-between items-center h-20 bg-white shadow-md shadow-slate-300 w-full">
        <form className="flex flex-row overflow-hidden rounded-md">
          <input
            className="bg-slate-200 px-4"
            type="text"
            placeholder="Buscar"
            name="search"
            id="search"
          />
          <button
            type="submit"
            className="py-2 px-4 text-sm bg-indigo-700 text-white hover:bg-blue-700 transition-all duration-500"
          >
            Buscar
          </button>
        </form>
        <div>Lorem, ipsum dolor.</div>
        <button className="py-2 px-4 text-sm bg-indigo-700 text-white hover:bg-blue-700 transition-all duration-500 rounded-md">
          Calendario
        </button>
      </nav>
      <aside className=" container-snap flex flex-col fixed w-[12rem] bg-indigo-700 top-0 h-screen py-8 overflow-y-scroll">
        <h2 className="text-center font-bold text-xl text-slate-100 pb-8 border-b-[1px]">
          MI BIBLIOTECA
        </h2>
        <HomeDropDown {...dropItems} />
        <ul >
          {sideItems.map((item) => (
            <Link href={item.url}>
              <li className="hover:bg-blue-700 transition-all duration-300 flex flex-col gap-2 text-white text-start border-b-[1px] w-full border-current py-2 px-4 whitespace-nowrap" key={item.title}>{item.title}</li>
            </Link>
          ))}
        </ul>
        <HomeDropDown {...dropItems} />
      </aside>
      <main className="ml-[12rem] mt-20 ">{children}</main>
    </div>
  );
}
