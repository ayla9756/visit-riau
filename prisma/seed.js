const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

 

async function main() {
   const users = [
      {
         
         name: "ayla azzura",
         email: "aylaazzura2209@gmail.com",
         password: bcrypt.hashSync("12345678", 10),
         role:"ADMIN"

      },
   ];
   await prisma.user.createMany({
      data: users,
      skipDuplicates: true,
   });
 
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });

// npx prisma migrate reset
// npx prisma migrate dev
// atau: npx prisma db seed
