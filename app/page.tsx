import Image from "next/image";
import Genre from "@/components/Genre";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center">
      <div className="flex flex-col m-10">
        <h1 className="text-white text-6xl font-bold">
          Generate your qr Code
        </h1>
        <p className="text-slate-400 font-serif">Generate & Share Qr codes</p>
      </div>

      <Genre />
    </section>
  );
}
