const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try{
        await database.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Fitness"},
                {name: "Engineering"},
                {name: "Web Design"},
                {name: "Graphics"},
                {name: "Modelling"},
            ]
        });

        console.log("Success made")
    } catch (err) {
        console.log("Error seeding db categories: ", err)
    } finally {
        await database.$disconnect();
    }
}

main();