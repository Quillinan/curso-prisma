// //Rascunho do site https://prismaliser.app/

// datasource db {
//     provider = "postgresql"
//     url      = env("DATABASE_URL")
//   }

//   generator client {
//     provider = "prisma-client-js"
//   }

//   model User {
//     id Int @id @default(autoincrement())
//     email String @unique
//     password String
//     profile Profile?
//   }

//   model Profile {
//     id Int @id @default(autoincrement())
//     firstName String
//     lastName String
//     user   User @relation(fields: [userId], references: [id])
//     userId Int  @unique
//     address Address[]
//     profileServices ProfileService[]
//   }

//   model Address{
//     id Int @id @default(autoincrement())
//     street String
//     number String
//     zipcode  String @unique
//     profile Profile @relation(fields: [profileId], references: [id])
//     profileId Int
//   }

//   model ProfileService{
//     id Int @id @default(autoincrement())
//     servicecode String @unique
//     profile_id Int
//     service_id Int
//     profile Profile  @relation(fields: [profile_id], references: [id])
//     service Service  @relation(fields: [service_id], references: [id])
//     @@unique([profile_id, service_id])
//   }

//   model Service{
//     id Int @id @default(autoincrement())
//     description String
//     profileServices ProfileService[]
//   }

//   enum Role {
//     USER
//     ADMIN
//   }
