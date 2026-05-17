import { PrismaClient } from '@prisma/client';

export async function seedGear(prisma: PrismaClient, userId: number) {
  console.log(`Seeding Gear for User ID: ${userId}...`);

  const gear1 = await prisma.gear.create({
    data: {
      brand: 'Shimano',
      model: 'Stradic FL',
      type: 'Reel',
      subType: 'Spinning',
      size: '3000',
      userId: userId, 
    },
  });

  const gear2 = await prisma.gear.create({
    data: {
      brand: 'St. Croix',
      model: 'Mojo Bass',
      type: 'Rod',
      subType: 'Casting',
      size: '7ft Medium Heavy',
      userId: userId,
    },
  });

  return [gear1, gear2];
}