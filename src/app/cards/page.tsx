import Card from "@/app/(components)/Card";
import { type Card as C, getCards } from "@/db/schema";

export const revalidate = 0;

export default async function Cards() {
  const cards = await getCards();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold arabic-medium mb-10">البطاقات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card: C) => <Card key={card.id} {...card} />)}
      </div>
    </div>
  );
}

