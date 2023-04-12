export default function NavBarLogAndReg(){
    return(
        <nav className="bg-indigo-700 flex h-[15vh] p-2 justify-center items-center">
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
    )
}