/*
  Warnings:

  - You are about to drop the column `usersId` on the `todos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "todos" DROP CONSTRAINT "todos_usersId_fkey";

-- AlterTable
ALTER TABLE "todos" DROP COLUMN "usersId";
