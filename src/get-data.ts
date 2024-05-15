import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const users = await prisma.user.findMany({
  //     include: {
  //         posts: true
  //     }
  //   });
  //   console.log(users[0].posts);
  //   console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      email: "hnnzlieshaikh25ks@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  console.log(user);
};

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    prisma.$disconnect();
  });
