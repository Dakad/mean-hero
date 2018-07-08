import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { ILine } from './line';
import { LineService } from './line.service';

@Injectable()
export class LineResolver implements Resolve<ILine> {
  constructor(private lineService: LineService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ILine> {
    const num = route.paramMap.get('number');
    return this.lineService.getLineByNumber(+num);
  }
}
