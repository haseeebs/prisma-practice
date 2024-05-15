import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const user = await prisma.user.create({
        data: {
            name: 'haseeb',
            email: 'haseebshaikh25ks@gmail.com'
        }
    })
    console.log(user);
}

main().then(
    async () => {
        await prisma.$disconnect();
    }
).catch(
    async (error) => {
        console.error(error);
        await prisma.$disconnect();
    }
)