import { Bait, Gear, PrismaClient, Session } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';
import { seedUsers } from './user.seed';
import { seedGear } from './gear.seed';
import { seedBait } from './bait.seed';
import { seedSessions } from './session.seed';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('--- Starting Database Seed ---');

  await prisma.bait.deleteMany({});
  await prisma.gear.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.deleteMany({});

  const users = await seedUsers(prisma);
  
  const allGear: Gear[] = [];
  const allBait: Bait[] = [];
  const allSessions: Session[] = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i]

    const userGear = await seedGear(prisma, user.id, i); 
    const userBait = await seedBait(prisma, user.id, i);
    const userSession = await seedSessions(prisma, user.id, i);

    allGear.push(...userGear);
    allBait.push(...userBait);
    allSessions.push(...userSession)
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

  console.log('Bait created and linked:');
  console.table(allBait.map(b => ({ 
    id: b.id, 
    name: b.name, 
    ownerId: b.userId 
  })));

  console.log('Session created and linked:');
  console.table(allSessions.map(s => ({ 
    id: s.id, 
    title: s.title, 
    ownerId: s.userId 
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