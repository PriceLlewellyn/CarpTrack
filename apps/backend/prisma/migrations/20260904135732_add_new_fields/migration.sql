-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmPassword" TEXT DEFAULT 'temp_hash_123',
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL;
