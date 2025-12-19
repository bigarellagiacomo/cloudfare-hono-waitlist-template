import { it, expect, mock, beforeEach } from "bun:test";
import type { D1Database } from "@cloudflare/workers-types";
import type { NewSubscriber } from "./schema";
import { getTestDb } from "../../../test/getTestDb";
import { insertSubscriber } from "./queries";
import { reset } from "drizzle-seed";
import * as schema from "./schema";

mock.module("./db.ts", () => {
  return {
    getDb: () => getTestDb(),
  };
});

beforeEach(async () => {
  const db = getTestDb();
  await reset(db, schema);
});

it("insert a new subscriber into the database", async () => {
  const NewSubscriber: NewSubscriber = { email: "example@test.com" };
  const subscriber = await insertSubscriber({} as D1Database, NewSubscriber);
  expect(subscriber?.email).toBe(NewSubscriber.email);
  expect(subscriber?.id).toBeDefined();
  expect(subscriber?.createdAt).toBeDefined();
});

it("throws an error when inserting a DUPLICATE email", async () => {
  const newSubscriber: NewSubscriber = { email: "example@test.com" };
  await insertSubscriber({} as D1Database, newSubscriber);
  expect(insertSubscriber({} as D1Database, newSubscriber)).rejects.toThrow();
});

it("throws an error when inserting an INVALID email", async () => {
  const newSubscriber: NewSubscriber = { email: "example@test" };
  expect(insertSubscriber({} as D1Database, newSubscriber)).rejects.toThrow();
});
