"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { privateRoutes, publicRoutes } from "routes/routes.models";
import LoginImage from "./assets/Login-Image.jpeg";
import NavBarLogAndReg from "app/components/NavBarLogAndReg";
import { loginSchema } from "./schemas/login.schema";
import { InputsLogin } from "./models/login.models";
import { getUserAction } from "./services/get.user.service";
import { hiddenPassword, showPassword } from "public/icons/showPassword";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputsLogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<InputsLogin> = async () => {
    const responseLogin = await getUserAction(formLogin);
    if(localStorage.getItem("user")){
      router.push(privateRoutes.Home)
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-gradient-to-t from-indigo-700 h-screen w-screen">
      <NavBarLogAndReg />
      <main
        className={
          !errors.email && !errors.password
            ? "flex sm:flex-row flex-col-reverse h-[85vh] gap-2"
            : "flex sm:flex-row flex-col-reverse h-[85vh]"
        }
      >
        <Image
          src={LoginImage}
          alt="Imagen ilustrativa para la sección de Inicio de Sesión"
          className="sm:rounded-r-full rounded-t-[180px]"
          width={800}
          height={900}
        />
        <section
          className={
            !errors.email && !errors.password
              ? "w-screen flex flex-col justify-center items-center gap-4 p-4"
              : "w-screen flex flex-col justify-center items-center gap-4 pt-4"
          }
        >
          <h1 className="font-bold text-grey text-2xl">
            Ingreso de <span className="text-indigo-700">Usuarios</span>
          </h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col justify-center items-center gap-6"
          >
            <p className="text-grey font-medium text-center">
              Inicie sesión mediante su usuario de correo institucional
            </p>
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
            {!errors.email && !errors.password && (
              <div
                className="absolute ml-40 sm:mt-12 mt-[4.5rem] cursor-pointer"
                onClick={() => setShowPwd(!showPwd)}
              >
                {showPwd ? showPassword : hiddenPassword}
              </div>
            )}
            <button
              className="bg-indigo-700 text-white hover:underline py-1 w-36 rounded-lg"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </form>
          <Link href={publicRoutes.Forget_Password} className="hover:underline">
            Restablecer contraseña
          </Link>
          <Link
            href={publicRoutes.Register}
            className="text-stone-300 font-semibold hover:underline"
          >
            Registrarse
          </Link>
        </section>
      </main>
    </div>
  );
}
