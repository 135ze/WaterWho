/*
  Warnings:

  - You are about to alter the column `DateOfBirth` on the `UserProfile` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserProfile" (
    "UserID" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "DateOfBirth" DATETIME NOT NULL,
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
INSERT INTO "new_UserProfile" ("AccountCreatedDate", "BenefitsAndCompensation", "CurrentStudyTerm", "DateOfBirth", "DealBreakers", "DesiredTraits", "Discord", "Gender", "Height", "Instagram", "Interests", "Location", "Mbti", "Name", "PersonalDescription", "PhoneNumber", "RelationshipStyle", "Religion", "School", "SexualOrientation", "Tags", "UserID", "YearAndMajor") SELECT "AccountCreatedDate", "BenefitsAndCompensation", "CurrentStudyTerm", "DateOfBirth", "DealBreakers", "DesiredTraits", "Discord", "Gender", "Height", "Instagram", "Interests", "Location", "Mbti", "Name", "PersonalDescription", "PhoneNumber", "RelationshipStyle", "Religion", "School", "SexualOrientation", "Tags", "UserID", "YearAndMajor" FROM "UserProfile";
DROP TABLE "UserProfile";
ALTER TABLE "new_UserProfile" RENAME TO "UserProfile";
CREATE INDEX "UserProfile_UserID_idx" ON "UserProfile"("UserID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
