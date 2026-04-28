import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return [
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
  }
}
