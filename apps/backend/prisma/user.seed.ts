import { PrismaClient , User } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  console.log('Seeding Users...');

  const userData = [
    { username: 'LlewellynPrice', email: 'llewellyn67.P@hotmail.com', age: 26, fisherman: true },
    { username: 'IestynPrice', email: 'iestyn89.P@hotmail.com', age: 27, fisherman: true },
    { username: 'BrentPrice', email: 'BrentPrice.P@hotmail.com', age: 64, fisherman: true },
    { username: 'GaewainPrice', email: 'GaewainPrice.P@hotmail.com', age: 24, fisherman: true },
  ];

  const users: User[] = [];

  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { username: u.username },
      update: {},
      create: u,
    });
    users.push(user);
  }

  return users;
}