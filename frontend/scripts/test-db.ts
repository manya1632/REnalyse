// scripts/test-db.ts
import 'dotenv/config'; // <--- ADD THIS AT THE TOP
import prisma from '../lib/prisma';

async function main() {
  try {
    // Explicitly check if the URL is loaded
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in your environment!");
    }
    
    const userCount = await prisma.user.count();
    console.log(`✅ Connection Successful! Current user count: ${userCount}`);
  } catch (e) {
    console.error("❌ Connection Failed:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();