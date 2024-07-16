import Image from "next/image";
import Calculator2 from "./Calculator2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calculator2 />
    </main>
  );
}
