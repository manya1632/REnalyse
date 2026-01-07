import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // For Neon, use the DIRECT_URL for migrations/CLI commands
    url: env('DIRECT_URL'), 
  },
});