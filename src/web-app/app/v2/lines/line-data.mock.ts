import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ILine } from './line';

export class LineData implements InMemoryDbService {
  createDb() {
    const lines: ILine[] = [
      {
        id: 0,
        number: '1',
        destination: 'STOCKEL',
        text_color: 'FFFFFF',
        color: 'C4008F',
        // destination_nl: 'STOKKEL',
        mode: 'M'
      },
      {
        id: 21,
        color: 'C4008F',
        text_color: 'FFFFFF',
        // destination_nl: 'WESTSTATION',
        number: '1',
        destination: "GARE DE L'OUEST",
        mode: 'M'
      },
      {
        id: 61,
        color: 'F57000',
        text_color: 'FFFFFF',
        // destination_nl: 'SIMONIS',
        number: '2',
        destination: 'SIMONIS',
        mode: 'M'
      },
      {
        id: 42,
        color: 'F57000',
        text_color: 'FFFFFF',
        // destination_nl: 'ELISABETH',
        number: '2',
        destination: 'ELISABETH',
        mode: 'M'
      },
      {
        id: 80,
        color: 'B5BA05',
        text_color: '000000',
        // destination_nl: 'CHURCHILL',
        number: '3',
        destination: 'CHURCHILL',
        mode: 'T'
      },
      {
        id: 106,
        color: 'B5BA05',
        text_color: '000000',
        // destination_nl: 'ESPLANADE',
        number: '3',
        destination: 'ESPLANADE',
        mode: 'T'
      },
      {
        id: 132,
        color: 'F25482',
        text_color: '000000',
        // destination_nl: 'STALLE (P)',
        number: '4',
        destination: 'STALLE (P)',
        mode: 'T'
      },
      {
        id: 153,
        color: 'F25482',
        text_color: '000000',
        // destination_nl: 'NOORDSTATION',
        number: '4',
        destination: 'GARE DU NORD',
        mode: 'T'
      },
      {
        id: 174,
        color: 'E6B012',
        text_color: 'FFFFFF',
        // destination_nl: 'HERRMANN-DEBROUX',
        number: '5',
        destination: 'HERRMANN-DEBROUX',
        mode: 'M'
      },
      {
        id: 202,
        color: 'E6B012',
        text_color: 'FFFFFF',
        // destination_nl: 'ERASMUS',
        number: '5',
        destination: 'ERASME',
        mode: 'M'
      },
      {
        id: 230,
        color: '0078AD',
        text_color: 'FFFFFF',
        // destination_nl: 'ELISABETH',
        number: '6',
        destination: 'ELISABETH',
        mode: 'M'
      },
      {
        id: 256,
        color: '0078AD',
        text_color: 'FFFFFF',
        // destination_nl: 'KONING BOUDEWIJN',
        number: '6',
        destination: 'ROI BAUDOUIN',
        mode: 'M'
      },
      {
        id: 282,
        color: 'FFF06E',
        text_color: '000000',
        // destination_nl: 'HEIZEL',
        number: '7',
        destination: 'HEYSEL',
        mode: 'T'
      },
      {
        id: 318,
        color: 'FFF06E',
        text_color: '000000',
        // destination_nl: 'VANDERKINDERE',
        number: '7',
        destination: 'VANDERKINDERE',
        mode: 'T'
      },
      {
        id: 360,
        color: '338C26',
        text_color: 'FFFFFF',
        // destination_nl: 'BRUSSELS AIRPORT',
        number: '12',
        destination: 'BRUSSELS AIRPORT',
        mode: 'B'
      }
    ];
    return { lines };
  }
}
