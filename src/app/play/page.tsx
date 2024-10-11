import { getRandomCards } from "@/db/schema";
import Game from "./(components)/Game";

export const revalidate = 0;

export default async function Play() {
  const cards = await getRandomCards(); // Gets random 10 cards from the databse

  return (
    <div>
      <Game cards={cards} />
    </div>
  );
}
