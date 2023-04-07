import Image from "next/image";

export default function Root() {
  return (
    <div className="grid place-content-center h-screen w-screen bg-slate-200">
    <div className=" from-purple bg-gradient-to-tr  sm:h-[26rem] sm:w-[38rem] h-[26rem] w-[18rem] border-2 border-solid border-black grid place-content-center ">
    <div className="flex sm:flex-row flex-col gap-4 bg-white justify-center items-center rounded-2xl p-6 font-bold h-[20rem] w-[16rem] sm:h-80 sm:w-[32rem]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl text-grey ">
          BIBLIO<span className="text-purple">METRICA</span>
        </h1>
        <p className="text-gray-500 text-lg font-semibold">Decide con Datos</p>
        <button className="hover:font-bold font-semibold bg-purple text-white rounded-lg h-9 w-32 text-center">Comenzar</button>
      </div>
      <Image src="https://img.freepik.com/vector-gratis/libro-lectura-joven-estudiante-estudiando-interior-biblioteca-mujer-sentada-escritorio-estantes-estanteria-llena-libros-ilustracion-vectorial-plana-educacion-conocimiento-concepto-club-lectores_74855-21149.jpg?w=2000" alt="logo landing" width={230} height={230} />
    </div>
    </div>
    </div>
  );
}
