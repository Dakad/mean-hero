import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: '1009187',
        name: 'Black Panther'
      },
      {
        id: '1009220',
        name: 'Captain America'
      },
      {
        id: '1009351',
        name: 'HULK'
      },
      {
        id: '1009664',
        name: 'Thor'
      },
      {
        id: '1010740',
        name: 'Silver Surfer'
      },
      {
        id: '1009718',
        name: 'Wolverine'
      },
      {
        id: '1009262',
        name: 'Daredevil'
      },
      {
        id: '1009282',
        name: 'Doctor Strange'
      }
    ];
    return { heroes };
  }
}
