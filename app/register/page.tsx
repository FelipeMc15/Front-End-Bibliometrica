"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { publicRoutes } from "routes/routes.models";
import LoginImage from "../login/assets/Login-Image.jpeg";
import NavBarLogAndReg from "app/components/NavBarLogAndReg";
import { registerSchema } from "./schemas/register.schema";
import { InputsRegister } from "./models/register.models";
import { registerUserAction } from "./services/register.user.service";
import { hiddenPassword, showPassword } from "public/icons/showPassword";

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputsRegister>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleRegister: SubmitHandler<InputsRegister> = () => {
    console.log(formRegister, "soy data");
    registerUserAction(formRegister);
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-gradient-to-t from-indigo-700 h-screen w-screen">
      <NavBarLogAndReg />
      <main
        className={
          !errors.firstName &&
          !errors.lastName &&
          !errors.email &&
          !errors.password
            ? "flex sm:flex-row flex-col-reverse h-[85vh] gap-2"
            : "flex sm:flex-row flex-col-reverse h-[85vh]"
        }
      >
        <Image
          src={LoginImage}
          alt="Imagen ilustrativa para la sección de Registro"
          className="sm:rounded-r-full rounded-t-[180px]"
          width={800}
          height={900}
        />
        <section
          className={
            !errors.firstName &&
            !errors.lastName &&
            !errors.email &&
            !errors.password
              ? "w-screen flex flex-col justify-center items-center gap-4 p-4"
              : "w-screen flex flex-col justify-center items-center gap-4 pt-4"
          }
        >
          <h1 className="font-bold text-grey text-2xl">
            Registro de <span className="text-indigo-700">Usuarios</span>
          </h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col justify-center items-center gap-6"
          >
            <p className="text-grey font-medium text-center">
              Registre su usuario de correo institucional <b>fácil y rápido</b>
            </p>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              className={
                !errors.firstName
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
            <input
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
              className={
                !errors.lastName
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
            <input
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              type="text"
              placeholder="Usuario"
              onChange={handleChange}
              className={
                !errors.email
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <input
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
              type={!showPwd ? "password" : "text"}
              placeholder="Contraseña"
              onChange={handleChange}
              className={
                !errors.password
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.password && (
              <p className="text-red-500 ">{errors.password.message}</p>
            )}
            {!errors.firstName &&
              !errors.lastName &&
              !errors.email &&
              !errors.password && (
                <div
                  className="absolute ml-40 sm:mt-[10rem] mt-[10.1rem] cursor-pointer"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? showPassword : hiddenPassword}
                </div>
              )}
            <button
              className="bg-indigo-700 text-white hover:underline py-1 w-36 rounded-lg"
              type="submit"
            >
              Regístrate
            </button>
          </form>
          <Link
            href={publicRoutes.Login}
            className="text-stone-300 font-semibold hover:underline"
          >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
        </section>
      </main>
    </div>
  );
}
