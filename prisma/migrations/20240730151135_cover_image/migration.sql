/*
  Warnings:

  - Added the required column `cover_image_url` to the `album` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "album" ADD COLUMN     "cover_image_url" TEXT NOT NULL;
