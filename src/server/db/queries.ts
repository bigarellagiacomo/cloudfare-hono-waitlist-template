import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db";
import type { NewSubscriber } from "./schema";
import * as schema from "./schema";

export async function insertSubscriber(
  database: D1Database,
  NewSubscriber: NewSubscriber,
) {
  const db = getDb(database);
  const [res] = await db
    .insert(schema.subscribers)
    .values(NewSubscriber)
    .returning();
  return res;
}
