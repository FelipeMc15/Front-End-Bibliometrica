export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-row w-screen h-full ">
      <aside className="border-2 border-red-500 border-solid w-fit h-screen p-4 flex flex-col gap-14">
        <h2 className="text-2xl text-black text-center ">Title</h2>
        <ul className="w-48 text-center flex flex-col gap-4">
          <li>Hola mundo</li>
          <li>Hola mundo</li>
          <li>Hola mundo</li>
          <li>Hola mundo</li>
          <li>Hola mundo</li>
        </ul>
      </aside>
      <div className="border-2 border-yellow-500 border-solid h-screen flex flex-col">
        <nav className="border-2 border-green-500 border-solid w-full h-20 fixed flex flex-row gap-80 p-6 bg-white">
          <form className="flex gap-2">
            <input className="border-2 border-solid border-black" type="text" placeholder="buscar" />
            <button className="border-2 border-solid border-black" type="submit">buscar</button>
          </form>
          <div className="flex flex-row gap-3">
            <div>Imagen</div>
            <p>Solicitar asesoria personalizada</p>
          </div>
          <div className="flex flex-row gap-3">
              <p>Notif</p>
              <p>Perfil</p>
          </div>
        </nav>
        <main className="border-2 border-violet-500 border-solid h-full overflow-scroll overflow-x-hidden p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
