-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Socials" (
    "userId" TEXT NOT NULL,
    "socialType" INTEGER NOT NULL,
    "socialLink" TEXT NOT NULL
);
INSERT INTO "new_Socials" ("socialLink", "socialType", "userId") SELECT "socialLink", "socialType", "userId" FROM "Socials";
DROP TABLE "Socials";
ALTER TABLE "new_Socials" RENAME TO "Socials";
CREATE UNIQUE INDEX "Socials_userId_socialType_key" ON "Socials"("userId", "socialType");
CREATE TABLE "new_Relationship" (
    "userOneID" TEXT NOT NULL,
    "userTwoID" TEXT NOT NULL,
    "relationshipStatus" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Relationship" ("relationshipStatus", "userOneID", "userTwoID") SELECT "relationshipStatus", "userOneID", "userTwoID" FROM "Relationship";
DROP TABLE "Relationship";
ALTER TABLE "new_Relationship" RENAME TO "Relationship";
CREATE UNIQUE INDEX "Relationship_userOneID_userTwoID_key" ON "Relationship"("userOneID", "userTwoID");
CREATE TABLE "new_Notifications" (
    "receiverID" TEXT NOT NULL,
    "notificationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timeCreated" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL
);
INSERT INTO "new_Notifications" ("message", "notificationID", "receiverID", "status", "timeCreated", "title") SELECT "message", "notificationID", "receiverID", "status", "timeCreated", "title" FROM "Notifications";
DROP TABLE "Notifications";
ALTER TABLE "new_Notifications" RENAME TO "Notifications";
CREATE TABLE "new_Applications" (
    "applicantID" TEXT NOT NULL,
    "receiverID" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "letterOfRecommendation" TEXT NOT NULL,
    "applicationStatus" INTEGER NOT NULL
);
INSERT INTO "new_Applications" ("applicantID", "applicationStatus", "coverLetter", "letterOfRecommendation", "receiverID", "resume") SELECT "applicantID", "applicationStatus", "coverLetter", "letterOfRecommendation", "receiverID", "resume" FROM "Applications";
DROP TABLE "Applications";
ALTER TABLE "new_Applications" RENAME TO "Applications";
CREATE UNIQUE INDEX "Applications_applicantID_receiverID_key" ON "Applications"("applicantID", "receiverID");
CREATE TABLE "new_Documents" (
    "documentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Documents" ("documentID", "link", "userID") SELECT "documentID", "link", "userID" FROM "Documents";
DROP TABLE "Documents";
ALTER TABLE "new_Documents" RENAME TO "Documents";
CREATE TABLE "new_Images" (
    "imageOwnerID" TEXT NOT NULL,
    "imageType" INTEGER NOT NULL,
    "imageLink" TEXT NOT NULL
);
INSERT INTO "new_Images" ("imageLink", "imageOwnerID", "imageType") SELECT "imageLink", "imageOwnerID", "imageType" FROM "Images";
DROP TABLE "Images";
ALTER TABLE "new_Images" RENAME TO "Images";
CREATE UNIQUE INDEX "Images_imageOwnerID_imageType_imageLink_key" ON "Images"("imageOwnerID", "imageType", "imageLink");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
