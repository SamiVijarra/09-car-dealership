import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
    },
  ];
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.cars[parseInt(id) - 1];
  }
}
