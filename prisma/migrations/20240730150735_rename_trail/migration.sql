/*
  Warnings:

  - You are about to drop the `track` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "track" DROP CONSTRAINT "track_album_id_fkey";

-- DropTable
DROP TABLE "track";

-- CreateTable
CREATE TABLE "trail" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "album_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "trail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trail" ADD CONSTRAINT "trail_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
