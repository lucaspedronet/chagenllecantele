import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schema';
import { Point } from './models/Points';

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const dataBase = new Database({
  adapter,
  modelClasses: [Point],
});
