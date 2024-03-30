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

UserProfile: PK: (ID) : Changed this almost completely. Update once backend update is done.
ID: string
Name: string
Bday: date
Gender identity: string
Height: Number in cm
Uni: String
Study Term: number
Location: String
Sexual Orientation: string
Religion: string
Year and Major: string
MBTI: MBTI ENUM class
Tags: String of ints, comma seperated
Phone Number: number
Discord username: string
Instagram Handle: string
Personal Description: string (Char Limit 280)
Relationship Style: string (char Limit 280)
Benefits and Compensation: (char Limit 280)
ideal candidate
  - Interests: (char Limit 100)
  - Dealbreakers: (char Limit 100)
  - Desired Traits: (char Limit 100)

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
