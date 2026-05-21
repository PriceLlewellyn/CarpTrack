import { PrismaClient } from '@prisma/client';

export async function seedBait(prisma: PrismaClient, userId: number, index: number) {
  console.log(`Seeding Baits for User ID: ${userId}...`);

  const baitData = [
    {
      name: 'F1 Sweet Match',
      brand: 'Sonubaits',
      type: 'Groundbait',
      flavor: 'Sweet/Creamy',
      size: 'Fine Powder',
      colour: 'Yellow',
      presentation: 'Method Feeder',
      isliquidUsed: true,
    },
    {
      name: 'Match Wafters',
      brand: 'Mainline Match',
      type: 'Dumbell Hookbait',
      flavor: 'Chocolate Orange',
      size: '8mm',
      colour: 'Orange',
      presentation: 'Banded',
      isliquidUsed: false,
    },

    {
      name: 'The Cell',
      brand: 'Mainline',
      type: 'Boilie',
      flavor: 'Coconut/Nut',
      size: '18mm',
      colour: 'White',
      presentation: 'Hair Rigged Bottom Bait',
      isliquidUsed: true,
    },
    {
      name: 'Meaty Muscle Spike-ums',
      brand: 'Sonubaits',
      type: 'Wafter',
      flavor: 'Meaty Mussel',
      size: '10mm',
      colour: 'Washed-out Green/Pink',
      presentation: 'Spiked',
      isliquidUsed: false,
    },
  ];

const b = baitData[index % baitData.length];

  const item = await prisma.bait.create({
    data: {
      ...b,
      userId: userId,
    },
  });

  return [item]; 
}