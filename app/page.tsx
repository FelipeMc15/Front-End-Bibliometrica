'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { publicRoutes } from 'routes/routes.models';

export default function Root() {
  const router = useRouter();
  return (
    <div className="  sm:h-[100vh] sm:w-[100vw] h-[100vh] w-[100vw] grid  place-content-center landing_info_container">
      
      <div className="custom-shape-divider-top-1681098218 z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    
      <div className="z-10 flex sm:flex-row flex-col gap-4 bg-white justify-center items-center rounded-2xl p-6 font-bold h-[80vh] w-[80vw] sm:h-80vh sm:w-[80vw]">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className=" xl:text-6xl lg:text-5xl text-2x1 text-grey ">
          BIBLIO<span className="text-indigo-700">MÉTRICA</span>
          </h1>
          <p className="text-3xl text-gray-500 font-semibold">Decide con Datos</p>
          <button className="hover:font-bold font-semibold bg-indigo-500 text-white rounded-lg h-12 w-32 text-center text-xl">Comenzar</button>
        </div>
        <Image src="/assets/LandingImage.jpg" alt="logo landing" width={480} height={480} />
      </div>

    </div>
  );
};