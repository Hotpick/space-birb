"use client";

import FarmGrid from "@/components/FarmGrid";
import Header from "@/components/Header";
import 'reactjs-popup/dist/index.css';

export default function Home() {
  return (
    <div className="relative pt-[53px]">
      <Header/>
      <FarmGrid/>
      <div className="fixed bottom-0 left-0 w-full h-[53px] bg-[#4E0D0B]" />
    </div>
  );
}
