/*
  Warnings:

  - The primary key for the `Bait` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Bait` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Catch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Catch` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sessionId` column on the `Catch` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gearId` column on the `Catch` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `baitId` column on the `Catch` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Gear` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Gear` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Waypoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Waypoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Club` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClubMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Bait` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `Bait` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Catch` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `Catch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Gear` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `Gear` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Waypoint` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `Waypoint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Bait" DROP CONSTRAINT "Bait_userId_fkey";

-- DropForeignKey
ALTER TABLE "Catch" DROP CONSTRAINT "Catch_baitId_fkey";

-- DropForeignKey
ALTER TABLE "Catch" DROP CONSTRAINT "Catch_gearId_fkey";

-- DropForeignKey
ALTER TABLE "Catch" DROP CONSTRAINT "Catch_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "Catch" DROP CONSTRAINT "Catch_userId_fkey";

-- DropForeignKey
ALTER TABLE "ClubMember" DROP CONSTRAINT "ClubMember_clubId_fkey";

-- DropForeignKey
ALTER TABLE "ClubMember" DROP CONSTRAINT "ClubMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "Gear" DROP CONSTRAINT "Gear_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Waypoint" DROP CONSTRAINT "Waypoint_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- AlterTable
ALTER TABLE "Bait" DROP CONSTRAINT "Bait_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Bait_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Catch" DROP CONSTRAINT "Catch_pkey",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "sessionId",
ADD COLUMN     "sessionId" INTEGER,
DROP COLUMN "gearId",
ADD COLUMN     "gearId" INTEGER,
DROP COLUMN "baitId",
ADD COLUMN     "baitId" INTEGER,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Catch_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Gear" DROP CONSTRAINT "Gear_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Gear_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Waypoint" DROP CONSTRAINT "Waypoint_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Waypoint_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Club";

-- DropTable
DROP TABLE "ClubMember";

-- DropTable
DROP TABLE "_UserFollows";

-- AddForeignKey
ALTER TABLE "Gear" ADD CONSTRAINT "Gear_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bait" ADD CONSTRAINT "Bait_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catch" ADD CONSTRAINT "Catch_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catch" ADD CONSTRAINT "Catch_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catch" ADD CONSTRAINT "Catch_baitId_fkey" FOREIGN KEY ("baitId") REFERENCES "Bait"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catch" ADD CONSTRAINT "Catch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waypoint" ADD CONSTRAINT "Waypoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
