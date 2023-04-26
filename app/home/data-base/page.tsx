import GeneralCard from "app/components/Card"
import HomeFooter from "../components/HomeFooter"

export default function DataBase(){
    const cards = [1,2,3,4,5,6,7,8]
    return(
        <div className="w-full flex flex-col items-center gap-4 pt-2">
        <div className="bg-slate-500 w-1/3 h-24 text-white text-center">Aqui iria el banner</div>
        <h3 className="text-4xl text-indigo-700 font-bold underline">Bases de Datos</h3>
        <section className="w-full flex flex-row gap-4 flex-wrap items-center justify-center">
          {cards.map(card => <GeneralCard/>)}
        </section>
        <HomeFooter />
      </div>
    )
}