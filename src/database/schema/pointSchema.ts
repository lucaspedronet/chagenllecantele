import { tableSchema } from '@nozbe/watermelondb';

const pointSchema = tableSchema({
  name: 'points',
  columns: [
    {
      name: 'point_id',
      type: 'string',
    },
    {
      name: 'latitude',
      type: 'string',
    },
    {
      name: 'longitude',
      type: 'string',
    },
    {
      name: 'speed',
      type: 'string',
    },
    {
      name: 'time',
      type: 'string',
    },
  ],
});

export { pointSchema };
