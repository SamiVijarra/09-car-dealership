import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Wrangler',
      year: 2021,
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
}
