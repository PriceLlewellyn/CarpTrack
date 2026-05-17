import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';
import { seedUsers } from './user.seed';
import { seedGear } from './gear.seed';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('--- Starting Database Seed ---');

  const users = await seedUsers(prisma);
  
  const primaryUserId = users[0].id;

  const gear = await seedGear(prisma, primaryUserId);

  console.log('--- Seed Summary ---');
  console.log('Users created:');
  console.table(users.map(u => ({ id: u.id, username: u.username })));
  
  console.log('Gear created:');
  console.table(gear.map(g => ({ id: g.id, brand: g.brand, model: g.model, ownerId: g.userId })));
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });