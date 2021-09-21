import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Point extends Model {
  static table = 'points';

  @field('point_id')
  point_id!: string;

  @field('latitude')
  latitude!: string;

  @field('longitude')
  longitude!: string;

  @field('speed')
  speed!: string;

  @field('time')
  time!: string;
}

export { Point };
