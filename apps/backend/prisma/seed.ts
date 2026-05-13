import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  const post1 = await prisma.user.upsert({
    where: { username: 'LlewellynPrice' },
    update: {},
    create: {
      username: 'LlewellynPrice',
      email: 'llewellyn67.P@hotmail.com',
      fisherman: true,
    },
  });

  const post2 = await prisma.user.upsert({
    where: { username: 'IestynPrice' },
    update: {},
    create: {
      username: 'IestynPrice',
      email: 'iestyn89.P@hotmail.com',
      fisherman: true,
    },
  });

  console.log(' Seed successful:');
  console.table([post1, post2]);
}

main()
  .catch((e) => {
    console.error(' Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
