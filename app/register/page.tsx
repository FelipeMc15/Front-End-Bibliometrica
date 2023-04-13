"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { publicRoutes } from "routes/routes.models";
import LoginImage from "../login/assets/Login-Image.jpeg";
import NavBarLogAndReg from "app/components/NavBarLogAndReg";
import { registerSchema } from "./schemas/register.schema";
import { InputsRegister } from "./models/register.models";

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [formRegister, setFormRegister] = useState({
    name: "",
    lastname: "",
    user: "",
    password: "",
  });
  const dispatch = useDispatch<Dispatch<any>>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputsRegister>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      lastname: "",
      user: "",
      password: "",
    },
  });

  const handleRegister: SubmitHandler<InputsRegister> = (data) => {
    console.log(data, "soy data");
    //dispatch(getUserAction(1));
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-gradient-to-t from-indigo-700 h-screen w-screen">
      <NavBarLogAndReg />
      <main
        className={
          !errors.name && !errors.lastname && !errors.user && !errors.password
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
            !errors.name && !errors.lastname && !errors.user && !errors.password
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
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              className={
                !errors.name
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              {...register("lastname", { required: true })}
              aria-invalid={errors.lastname ? "true" : "false"}
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
              className={
                !errors.lastname
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.lastname && (
              <p className="text-red-500">{errors.lastname.message}</p>
            )}
            <input
              {...register("user", { required: true })}
              aria-invalid={errors.user ? "true" : "false"}
              type="text"
              placeholder="Usuario"
              onChange={handleChange}
              className={
                !errors.user
                  ? "pl-2 py-1 rounded-lg"
                  : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500"
              }
            />
            {errors.user && (
              <p className="text-red-500">{errors.user.message}</p>
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
            {!errors.name &&
              !errors.lastname &&
              !errors.user &&
              !errors.password && (
                <div
                  className="absolute ml-40 sm:mt-[10rem] mt-[10.1rem] cursor-pointer"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="grey"
                      height={"1.1rem"}
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="grey"
                      height={"1.1rem"}
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  )}
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
