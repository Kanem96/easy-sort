const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name : "Nights Out" },
                { name : "Games" },
                { name : "Hobbies" },
                { name : "Career & Business" },
                { name : "Music" },
                { name : "Sports & Fitness" },
                { name : "Travel & Outdoor" },
                { name : "Technology" },
                { name : "Social Activities" },
                { name : "Pets & Animals" },
            ]
        });
    } catch (error) {
        console.error("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main();