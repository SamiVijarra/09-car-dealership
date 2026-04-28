import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Wrangler',
      year: 2021,
    },
  ];
  findAll() {
    return this.cars;
  }
  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
