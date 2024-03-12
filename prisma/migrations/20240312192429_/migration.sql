/*
  Warnings:

  - The primary key for the `notes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `noteId` on the `notes` table. All the data in the column will be lost.
  - Added the required column `id` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isfavorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL
);
INSERT INTO "new_notes" ("content", "createdAt", "isfavorite", "title", "updatedAt", "userId") SELECT "content", "createdAt", "isfavorite", "title", "updatedAt", "userId" FROM "notes";
DROP TABLE "notes";
ALTER TABLE "new_notes" RENAME TO "notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
