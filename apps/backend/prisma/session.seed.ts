import { PrismaClient } from '@prisma/client';

export async function seedSessions(prisma: PrismaClient, userId: number, index: number) {
  console.log(`Seeding Sessions for User ID: ${userId}...`);

  const sessionData = [
    {
      title: 'Summer Carp Social',
      style: 'Carp',
      pegNumber: '14',
      totalWeight: 145.5,
      startTime: new Date('2024-06-10T08:00:00Z'),
      endTime: new Date('2024-06-10T18:00:00Z'),
    },
    {
      title: 'Winter River Session',
      style: 'Specimen',
      pegNumber: 'Bridge Pool',
      totalWeight: 12.2,
      startTime: new Date('2024-12-05T07:30:00Z'),
      endTime: new Date('2024-12-05T14:30:00Z'),
    },
    {
      title: 'Match Practice',
      style: 'Match Fishing',
      pegNumber: 'Peg 2',
      totalWeight: 42.4,
      startTime: new Date('2025-03-15T09:00:00Z'),
      endTime: new Date('2025-03-15T15:00:00Z'),
    },
    {
      title: 'Quick Evening Feeder session',
      style: 'General Coarse', 
      pegNumber: 'The Reeds',
      totalWeight: null,
      startTime: new Date(),
      endTime: null, 
    },
  ];

  const s = sessionData[index % sessionData.length];

  const item = await prisma.session.create({
    data: {
      ...s,
      userId: userId,
    },
  });

  return [item];
}