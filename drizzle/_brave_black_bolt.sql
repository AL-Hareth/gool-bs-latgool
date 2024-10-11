CREATE TABLE IF NOT EXISTS "cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"mainWord" varchar(255) NOT NULL,
	"blockWord1" varchar(255) NOT NULL,
	"blockWord2" varchar(255) NOT NULL,
	"blockWord3" varchar(255) NOT NULL,
	"blockWord4" varchar(255) NOT NULL,
	"blockWord5" varchar(255) NOT NULL,
	"approved" boolean DEFAULT false NOT NULL
);
