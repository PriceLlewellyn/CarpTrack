import { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  console.log('Seeding Users...');

  const user1 = await prisma.user.upsert({
    where: { username: 'LlewellynPrice' },
    update: {},
    create: {
      username: 'LlewellynPrice',
      email: 'llewellyn67.P@hotmail.com',
      age: 26,
      fisherman: true,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'IestynPrice' },
    update: {},
    create: {
      username: 'IestynPrice',
      email: 'iestyn89.P@hotmail.com',
      age: 27,
      fisherman: true,
    },
  });

  return [user1, user2];
}