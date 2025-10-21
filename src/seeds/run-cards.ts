import { initDb, db } from '../database/database.provider';
import { seedCards } from './cards.seeder';

async function runSeeder() {
  await initDb(); 
  await seedCards();
  process.exit(0);
}

runSeeder().catch((err) => {
  console.error(err);
  process.exit(1);
});
