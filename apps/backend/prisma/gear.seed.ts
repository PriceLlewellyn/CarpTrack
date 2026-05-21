import { PrismaClient } from '@prisma/client';

export async function seedGear(prisma: PrismaClient, userId: number, index: number) {
  console.log(`Seeding Gear for User ID: ${userId}...`);

  const gearData = [
    {
      rod: 'TX-7', rodBrand: 'Shimano', rodFt: 12,
      reel: 'Powerliner', reelBrand: 'Okuma', reelSize: 8000,
      line: '18lb Mono', gearType: 'Carp Setup',
    },
    {
      rod: 'Beastmaster', rodBrand: 'Shimano', rodFt: 10,
      reel: 'X-Aero', reelBrand: 'Shimano', reelSize: 4000,
      line: '8lb Mono', gearType: 'Match Setup',
    },
    {
      rod: 'Monster X', rodBrand: 'Preston', rodFt: 11,
      reel: 'Extremity XTR', reelBrand: 'Preston', reelSize: 5000,
      line: '8lb Mono', gearType: 'Match Setup',
    },
    {
      rod: 'Supera X', rodBrand: 'Preston', rodFt: 9,
      reel: 'Tournament', reelBrand: 'Daiwa', reelSize: 4000,
      line: '8lb Mono', gearType: 'Match Setup',
    },
  ];

const g = gearData[index % gearData.length];

  const item = await prisma.gear.create({
    data: {
      ...g,
      userId: userId,
    },
  });

  return [item]; 
}