-- CreateTable
CREATE TABLE "UserProfile" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "DateOfBirth" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "SexualOrientation" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Documents" (
    "documentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Images" (
    "imageOwnerID" INTEGER NOT NULL,
    "imageType" INTEGER NOT NULL,
    "imageLink" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Applications" (
    "applicantID" INTEGER NOT NULL,
    "receiverID" INTEGER NOT NULL,
    "resume" TEXT NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "letterOfRecommendation" TEXT NOT NULL,
    "applicationStatus" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Relationship" (
    "userOneID" INTEGER NOT NULL,
    "userTwoID" INTEGER NOT NULL,
    "relationshipStatus" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Socials" (
    "userId" INTEGER NOT NULL,
    "socialType" INTEGER NOT NULL,
    "socialLink" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notifications" (
    "receiverID" INTEGER NOT NULL,
    "notificationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timeCreated" DATETIME NOT NULL,
    "status" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE INDEX "UserProfile_UserID_idx" ON "UserProfile"("UserID");

-- CreateIndex
CREATE UNIQUE INDEX "Images_imageOwnerID_imageType_imageLink_key" ON "Images"("imageOwnerID", "imageType", "imageLink");

-- CreateIndex
CREATE UNIQUE INDEX "Applications_applicantID_receiverID_key" ON "Applications"("applicantID", "receiverID");

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_userOneID_userTwoID_key" ON "Relationship"("userOneID", "userTwoID");

-- CreateIndex
CREATE UNIQUE INDEX "Socials_userId_socialType_key" ON "Socials"("userId", "socialType");
