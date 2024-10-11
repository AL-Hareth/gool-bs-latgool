CREATE TABLE IF NOT EXISTS "cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"mainWord" varchar(255) NOT NULL,
	"blockWord1" varchar(255) NOT NULL,
	"approved" boolean DEFAULT false NOT NULL
);
