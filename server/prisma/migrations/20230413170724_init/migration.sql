-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "progress" INTEGER NOT NULL,
    "date" VARCHAR(255) NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "email" TEXT NOT NULL,
    "hashPassword" VARCHAR(300) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
