/*
  Warnings:

  - Added the required column `Religion` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserProfile" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "DateOfBirth" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "SexualOrientation" TEXT NOT NULL,
    "Religion" TEXT NOT NULL,
    "Height" INTEGER NOT NULL,
    "School" TEXT NOT NULL,
    "YearAndMajor" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "CurrentStudyTerm" TEXT NOT NULL,
    "Mbti" INTEGER NOT NULL,
    "Tags" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Discord" TEXT NOT NULL,
    "Instagram" TEXT NOT NULL,
    "PersonalDescription" TEXT NOT NULL,
    "RelationshipStyle" TEXT NOT NULL,
    "BenefitsAndCompensation" TEXT NOT NULL,
    "Interests" TEXT NOT NULL,
    "DealBreakers" TEXT NOT NULL,
    "DesiredTraits" TEXT NOT NULL,
    "AccountCreatedDate" DATETIME NOT NULL
);
DROP TABLE "UserProfile";
ALTER TABLE "new_UserProfile" RENAME TO "UserProfile";
CREATE INDEX "UserProfile_UserID_idx" ON "UserProfile"("UserID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
