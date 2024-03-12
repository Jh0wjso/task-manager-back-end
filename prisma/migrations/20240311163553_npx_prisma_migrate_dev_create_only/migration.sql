/*
  Warnings:

  - The primary key for the `notes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `color` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `notes` table. All the data in the column will be lost.
  - Added the required column `noteId` to the `notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "users" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notes" (
    "noteId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isfavorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "notes_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_notes" ("content", "createdAt", "isfavorite", "title", "updatedAt") SELECT "content", "createdAt", "isfavorite", "title", "updatedAt" FROM "notes";
DROP TABLE "notes";
ALTER TABLE "new_notes" RENAME TO "notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
