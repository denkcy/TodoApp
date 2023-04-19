/*
  Warnings:

  - Changed the type of `progress` on the `todos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "todos" DROP COLUMN "progress",
ADD COLUMN     "progress" INTEGER NOT NULL,
ALTER COLUMN "date" SET DATA TYPE VARCHAR(300);
