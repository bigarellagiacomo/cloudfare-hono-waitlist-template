import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema.ts";
import type { D1Database } from "@cloudflare/workers-types";

export const getDb = (database: D1Database) => {
  return drizzle(database, { schema });
};

export type DrizzleDb = ReturnType<typeof getDb>;
