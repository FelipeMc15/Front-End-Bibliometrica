import React from "react";
import HomeCard from "./components/HomeCard";
import HomeFooter from "./components/HomeFooter";
export default function HomePage() {
  function fakeInfo(n: number): JSX.Element[] {
    const r = [];
    for (let i = 0; i < n; i++) {
      r.push(<HomeCard />);
    }
    return r;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4 pt-2">
      <div className="bg-slate-500 w-1/3 h-24"></div>
      <section className="w-full flex flex-row gap-4 flex-wrap items-center justify-center">
        {fakeInfo(6)}
      </section>
      <HomeFooter />
    </div>
  );
}
