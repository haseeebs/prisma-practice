import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "hnnzlie bhiya"
        }
    })
};

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    prisma.$disconnect();
  });
