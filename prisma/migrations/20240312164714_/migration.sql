-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notes" (
    "noteId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isfavorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL
);
INSERT INTO "new_notes" ("content", "createdAt", "isfavorite", "noteId", "title", "updatedAt", "userId") SELECT "content", "createdAt", "isfavorite", "noteId", "title", "updatedAt", "userId" FROM "notes";
DROP TABLE "notes";
ALTER TABLE "new_notes" RENAME TO "notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
