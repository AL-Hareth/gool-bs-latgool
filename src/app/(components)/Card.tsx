import type { Card } from "@/db/schema";

export default function Card({
  id,
  mainWord,
  blockWord1,
  blockWord2,
  blockWord3,
  blockWord4,
  blockWord5,
}: Card) {

  function getColor() {
    // determine the color using the id multiples
    switch (id%4) {
      case 0:
        return "bg-red-600";
      case 1:
        return "bg-blue-600";
      case 2:
        return "bg-green-600";
      case 3:
        return "bg-yellow-600";
      default: // It should never come here
        return "bg-red-600";
    }
  }

  return (
    <div className={`card ${getColor()} text-primary-content arabic-regular text-center w-[300px] h-[240px] rounded-es-none rounded-ee-none`}>
      <div className="card-body pt-4">
        <h2 className="card-title justify-center text-white">{mainWord}</h2>
        <ul className="bg-white rounded-lg border border-black shadow-[-7px_6px_0px_0px_rgba(0,0,0,_0.48)] py-3">
          <li>{blockWord1}</li>
          <li>{blockWord2}</li>
          <li>{blockWord3}</li>
          <li>{blockWord4}</li>
          <li>{blockWord5}</li>
        </ul>
      </div>
    </div>
  );
}
