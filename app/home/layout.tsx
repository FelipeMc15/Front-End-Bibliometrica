"use client";
import React, { useState } from "react";
import { HomeDropDown } from "./components/HomeDropDown";
export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideItems = [
    "Trámite de documentos",
    "Solicitud de servicios",
    "Base de datos",
  ];

  const dropItems = {
    title: "DropDown",
    items: ["testItem", "testItem", "testItem", "testItem"],
  };

  const [open, setopen] = useState(false);

  return (
    <div className="w-full">
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

      <aside className="flex flex-col fixed w-[12rem] bg-indigo-700 top-0 h-screen py-8 overflow-y-scroll">
        <h2 className="text-center font-bold text-xl text-slate-100">
          MI BIBLIOTECA
        </h2>
        <HomeDropDown {...dropItems} />
        <ul className="flex flex-col text-slate-100 gap-4 p-4">
          {sideItems.map((e: string, index: number) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <HomeDropDown {...dropItems} />
      </aside>

      {/* <aside
        className={`fixed h-screen w-96 bg-slate-400 ${
          open ? "translate-x-96" : "translate-x-0"
        } transition-all duration-500}`}
      ></aside> */}

      <main className="ml-[12rem] mt-20">{children}</main>
    </div>
  );
}
