"use client";
import Image from "next/image";
import Link from "next/link";
import { publicRoutes } from "routes/routes.models";
import LoginImage from "./assets/Login-Image.jpeg";
import { FormEvent, useRef, useState } from "react";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({user:"", password:""});
  const formRef = useRef()  as React.MutableRefObject<HTMLFormElement>;
  function handleLogin(e: FormEvent){
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData)
    const errorObject = {user:"", password:""}
    if(values.user === ""){
      errorObject.user = "Debe ingresar un usuario"
    }

    if(values.password === ""){
      errorObject.password = "Debe ingresar una contraseña"
    }
    setErrors(errorObject)
  };
  function handleChange(){
    if(errors.user || errors.password){
      setErrors({user:"", password:""})
    }
  }
  return (
    <div className="bg-gradient-to-t from-purple h-screen w-screen">
      <nav className="bg-purple flex h-[15vh] p-2 justify-center items-center">
        {/* <Image src="" alt="logo de la Universidad" className="grow"/> */}
        <h2 className="grow text-white font-bold sm:text-4xl text-2xl pl-4">
          Logo de la Biblioteca
        </h2>
        <div className="flex flex-col pr-4">
          <span className="text-white sm:text-base text-sm">Universidad del Salvador</span>
          <span className="text-white sm:text-base text-sm">Teléfono: 0800-123-456</span>
          <span className="text-white sm:text-base text-sm">Dirección: Av. San Martin 123</span>
        </div>
      </nav>
      <main className={(!errors.user && !errors.password)?"flex sm:flex-row flex-col-reverse h-[85vh] gap-2":"flex sm:flex-row flex-col-reverse h-[85vh]"}>
        <Image
          src={LoginImage}
          alt="Imagen ilustrativa para la sección de Login"
          className="sm:rounded-r-full rounded-t-[180px]"
          width={800}
          height={900}
        />
        <section className={(!errors.user && !errors.password)?"w-screen flex flex-col justify-center items-center gap-4 p-4":"w-screen flex flex-col justify-center items-center gap-4 pt-4"}>
          <h1 className="font-bold text-grey text-2xl">
            Ingreso de <span className="text-purple">Usuarios</span>
          </h1>
          <form ref={formRef} onChange={handleChange} onSubmit={handleLogin} className="flex flex-col justify-center items-center gap-6">
            <p className="text-grey font-medium text-center">
              Inicie sesión mediante su usuario de correo institucional
            </p>
            <input name="user" type="text" placeholder="Usuario" className={!errors.user ? "pl-2 py-1 rounded-lg" : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500" }/>
            {errors.user && <p className="text-red-500">{errors.user}</p>}
            <input
            name="password"
              type={!showPwd ? "password" : "text"}
              placeholder="Contraseña"
              className={!errors.password ? "pl-2 py-1 rounded-lg" : "pl-2 py-1 rounded-lg border-2 border-solid border-red-500" }
              />
              {errors.password && <p className="text-red-500 ">{errors.password}</p>}
            {(!errors.user && !errors.password) && <div
              className="absolute ml-44 sm:mt-12 mt-[4.5rem] cursor-pointer"
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
            </div>}
            <button
              className="bg-purple text-white hover:underline py-1 w-36 rounded-lg"
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
            className="text-violet-950 font-semibold hover:underline"
          >
            Registrarse
          </Link>
        </section>
      </main>
    </div>
  );
}
