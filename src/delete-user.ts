import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.delete({
        where: {
            id: 3
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
