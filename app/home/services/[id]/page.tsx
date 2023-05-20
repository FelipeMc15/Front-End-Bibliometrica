import Image from "next/image";
import React from "react";
import testImg from "public/assets/1200px-Biblioteca-montserrat.jpg";
import HomeFooter from "app/home/components/HomeFooter";
import Checkbox from "app/home/components/Checkbox";
import InputWithLabel from "app/home/components/InputWithLabel";
type Params = {
  id: number;
};
type Props = {
  params: Params;
};

const firstCheck = {
  label: "Inducción a la biblioteca",
  htmlFor: "firstCheck",
};

const secondCheck = {
  label: "Identidad digital para investigadores",
  htmlFor: "secondCheck",
};

const thirdCheck = {
  label: "Como citar en APA",
  htmlFor: "thirdCheck",
};

const firstInput = {
  label: "Número de participantes",
  htmlFor: "firstInput",
};

const secondInput = {
  label: "Adjunta tu archivo",
  htmlFor: "secondInput",
};

const ServiceId = ({ params }: Props) => {
  const { id } = params;

  const infoFromId = {
    name: "Sandra Múnera",
    contactInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel tempora fugit, eaque ipsum voluptas nesciunt possimus quia laudantium error nostrum?",
  };

  const { name, contactInfo, p } = infoFromId;
  return (
    <>
      <div className="flex justify-between w-full p-0.5 h-screen">
        <div className="w-1/3 h-full flex flex-col pt-[8%] gap-8 bg-indigo-700 text-white ">
          <h2 className="text-3xl font-bold text-center">{name}</h2>
          <Image
            src={testImg}
            alt="img.jpg"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h4 className="text-center font-light text-xl">{contactInfo}</h4>
          <p className="text-center font-extralight text-lg">{p}</p>
        </div>
        <form className="w-2/3 h-full bg-white p-4 flex flex-col pt-[8%] gap-2">
          <h2 className="font-semibold text-lg">
            Seleccione los temas de su interés
          </h2>
          <Checkbox {...firstCheck} />
          <Checkbox {...secondCheck} />
          <Checkbox {...thirdCheck} />

          <InputWithLabel {...firstInput} />
          <InputWithLabel {...secondInput} />

          <button
            className="w-fit h-fit px-4 py-2 bg-indigo-700 rounded-md text-white mt-10"
            type="submit"
          >
            Programar Evento
          </button>
        </form>
      </div>
      <HomeFooter />
    </>
  );
};

export default ServiceId;
