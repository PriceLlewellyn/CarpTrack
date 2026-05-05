import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
    const post1 = await prisma.user.upsert({
        where: { username: 'LlewellynPrice' },
        update: {},
        create: {
            username: 'LlewellynPrice',
            email: 'llewellyn67.P@hotmail.com',
        },
    });
    const post2 = await prisma.user.upsert({
        where: { username: 'IestynPrice' },
        update: {},
        create: {
            username: 'IestynPrice',
            email: 'iestyn89.P@hotmail.com',
        },
    });
    console.log({ post1, post2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
});
//# sourceMappingURL=seed.js.map