import { serial, pgTable, varchar, boolean } from "drizzle-orm/pg-core";
import { db } from "./drizzle";
import { sql } from "drizzle-orm";

export const cards = pgTable("cards", {
    id: serial("id").primaryKey(),
    mainWord: varchar("mainWord", { length: 255 }).notNull(),
    blockWord1: varchar("blockWord1", { length: 255 }).notNull(),
    blockWord2: varchar("blockWord2", { length: 255 }).notNull(),
    blockWord3: varchar("blockWord3", { length: 255 }).notNull(),
    blockWord4: varchar("blockWord4", { length: 255 }).notNull(),
    blockWord5: varchar("blockWord5", { length: 255 }).notNull(),
    approved: boolean("approved").notNull().default(false)
});

export type Card = typeof cards.$inferSelect;
export type NewCard = typeof cards.$inferInsert;

/** Inserts a new card */
export const insertCard = async function (card: NewCard) {
    return await db.insert(cards).values(card);
}

/** Gets all the cards */
export const getCards = async function () {
    return await db.select().from(cards);
}

/** Grabs random 10 cards */
export const getRandomCards = async function () {
    return await db
        .select()
        .from(cards)
        .orderBy(sql`RANDOM()`)
        .limit(10);
}
