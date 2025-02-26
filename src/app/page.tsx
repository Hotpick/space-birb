import FarmGrid from "@/components/FarmGrid";

export default function Home() {
  return (
    <div className="relative">
      <FarmGrid/>
      <div className="absolute bottom-0 left-0 w-full h-[14vw] bg-[#4E0D0B]" />
    </div>
  );
}
