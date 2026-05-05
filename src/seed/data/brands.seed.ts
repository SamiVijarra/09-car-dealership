import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    name: 'Toyota',
    id: uuid(),
    CreatedAt: new Date().getDate(),
  },
  {
    name: 'Honda',
    id: uuid(),
    CreatedAt: new Date().getDate(),
  },
  {
    name: 'Ford',
    id: uuid(),
    CreatedAt: new Date().getDate(),
  },
];
