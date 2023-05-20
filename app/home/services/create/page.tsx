"use client";
import HomeFooter from "app/home/components/HomeFooter";
import InputField from "app/components/InputField";
import { BodyService } from "../models/service.models";
import { ChangeEvent, useState } from "react";
import { serviceNewSchema } from "../schemas/service.schema";
import { SubmitHandler } from "react-hook-form";
import { InputsForMap } from "../utils/inputsForMap.utils";
import {useHookFormInit} from "../../../../hooks/useHookFormInit";
import { defaultValueServiceForm } from "../data/defaultvalues.data";
export default function CreateService() {
  const [formCreateService, setFormCreateService] = useState({});
  const [available, setAvailable] = useState<boolean>(false);

  const {register, errors, handleSubmit} = useHookFormInit(BodyService, serviceNewSchema, defaultValueServiceForm)
  
  function handleChangeInputs(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.name === "available") {
      setAvailable(!available)
    }
    setFormCreateService({
      ...formCreateService,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmitForm: SubmitHandler<BodyService> = () => {
    console.log("entre");
    console.log(formCreateService);
  }

  return (
    <>
      <div className="w-full h-screen p-0.5 flex flex-col items-center gap-4">
        <h1 className="text-center">Formulario de Creación de Servicio</h1>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-0.5 justify-center items-start"
        >
          {InputsForMap &&
            InputsForMap.map((individualInput) => (
              <InputField
                key={individualInput.name}
                name={individualInput.name}
                label={individualInput.label}
                type={individualInput.type}
                placeholder={individualInput.placeholder}
                register={register}
                handleChange={handleChangeInputs}
                errors={errors}
                className={""}
                available={available}
              />
            ))}
          <button
            type="submit"
            className="bg-white rounded-lg p-2 mx-auto mt-4"
          >
            Click Aquí
          </button>
        </form>
      </div>
      <HomeFooter />
    </>
  );
}
