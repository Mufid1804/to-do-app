-- CreateTable
CREATE TABLE "Todos" (
    "id" VARCHAR(10) NOT NULL DEFAULT nanoid(10),
    "text" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
