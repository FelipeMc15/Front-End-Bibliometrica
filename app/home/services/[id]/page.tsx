import Image from "next/image";
import React from "react";
import testImg from "public/assets/1200px-Biblioteca-montserrat.jpg";
import HomeFooter from "app/home/components/HomeFooter";

type Params = {
  id: number;
};
type Props = {
  params: Params;
};

const ServiceId = ({ params }: Props) => {
  const { id } = params;

  return (
    <>
      <div className="flex justify-between w-full p-8 h-screen">
        <div className="w-1/3 h-fit p-8">
          <h2 className="text-3xl font-bold text-center">Lorem, ipsum.</h2>
          <Image
            src={testImg}
            alt="img.jpg"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h4 className="text-center font-light text-xl">
            Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-center font-extralight text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            tempora fugit, eaque ipsum voluptas nesciunt possimus quia
            laudantium error nostrum?
          </p>
        </div>
        <form className="w-2/3 h-4/5 bg-white">
          <div>
            <label htmlFor="myText">Hola</label>
            <input type="text" name="hola" id="myText" placeholder="oa" />
          </div>
        </form>
      </div>
      <HomeFooter />
    </>
  );
};

export default ServiceId;
