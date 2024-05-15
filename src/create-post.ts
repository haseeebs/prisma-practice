import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const post = await prisma.post.create({
    data: {
      title: "Nai ree sab bura mann jate naa...",
      content: "pehle likha wo sab to delete hogay...",
      authorId: 1
    },
  });
  console.log(post);
};

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
  });
