"use client";

import FarmGrid from "@/components/FarmGrid";
import Header from "@/components/Header";
import 'reactjs-popup/dist/index.css';

export default function Home() {
  return (
    <div className="relative max-w-[500px] mx-auto">
      <Header/>
      <FarmGrid/>
      <div className="sticky bottom-0 left-0 w-full h-[53px] bg-[#4E0D0B]" />
    </div>
  );
}
