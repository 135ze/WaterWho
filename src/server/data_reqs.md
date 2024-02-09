# data requirements

## user profile 

(user should be able to indicate whether they want to display certain info. maybe only for the third section? is it easier to make it all one profile object? containing data:string, isHidden:bool, isMandatory:bool, hierarchy:tinyint (since we can have multiple) or something)

name
term
program

main headshot
other pics

gender identity
gender(s) interested
age
height
sequence (study or work for next 3 terms?)
hometown

employer info
benefits
position dates

interests
relationship expectations
traits
vices
history

application package requirements (do i need LOR? history?)	

isBanned? some grace period after match.

## application package
references
- email / user id of other referrer
- reference status
- reference contents (paragraph)
- references written by user
resume / work history
cover letters

## matches
sent applications
received applications
accepted applications
rejected applications

## applications
- interview status (was it agreed upon?)
- ranking after
- date of expiry

# Base Schema:

UserProfile: PK: (ID)
ID
Name
Year
Term
Program
Gender Identity
Gender Interested
Age
Height
Sequence (next 3 terms)
Hometown
WorkHistory ??? (don't understand this field)

Documents: PK: (documentID)
documentID
user
documentType
Link

Images: PK: none
imageLink
TypeOfImage
User

Applications: PK: (Applicant + Receiver)
Applicant
Receiver
Resume
CoverLetter
LOR
ApplicationStatus

Relationship: PK: (personOne, personTwo)
personOne
personTwo
rankFwd
rankBwd
status 

Socials: PK: (userId + socialType)
userid
socialType
socialLink