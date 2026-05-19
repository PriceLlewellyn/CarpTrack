import { Gear, PrismaClient } from '@prisma/client';
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
  
  const allGear: Gear[] = [];

  for (const user of users) {
    const userGear = await seedGear(prisma, user.id);
    allGear.push(...userGear);
  }

  console.log('\n--- Seed Summary ---');
  console.log('Users created:');
  console.table(users.map(u => ({ id: u.id, username: u.username })));
  
  console.log('Gear created and linked:');
  console.table(allGear.map(g => ({ 
    id: g.id, 
    rod: g.rod, 
    ownerId: g.userId 
  })));
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