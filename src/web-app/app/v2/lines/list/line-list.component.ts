import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILine } from '../line';
import { LineService, LineParameterService } from '../line.service';

@Component({
  templateUrl: './line-list.component.html',
  styleUrls: ['./line-list.component.scss']
})
export class LineListComponent implements OnInit {
  pageTitle: string = 'Line List';
  filteredLines: ILine[];
  lines: ILine[];
  errorMessage: string;

  get listFilter(): string {
    return this.lineParameterService.filterBy;
  }
  set listFilter(value: string) {
    this.lineParameterService.filterBy = value;
    this.filteredLines = this.performFilter(this.listFilter);
  }

  constructor(
    private lineService: LineService,
    private lineParameterService: LineParameterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pageTitle = 'Line List';
      // If parameters are passed in,
      // clear any existing filter
      if (Object.keys(params).length) {
        this.listFilter = null;
      }
      this.getLines();
    });
  }

  getLines(): void {
    this.lineService.getLines().subscribe((lines: ILine[]) => {
      this.lines = this.performSearch(lines);
      this.filteredLines = this.performFilter(this.listFilter);
    }, (error: any) => (this.errorMessage = <any>error));
  }

  // Local filter
  performFilter(filterBy: string): ILine[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.lines.filter(
        (line: ILine) =>
          line.destination.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else {
      return this.lines;
    }
  }

  // Advanced search
  performSearch(lines: ILine[]): ILine[] {
    const params = this.route.snapshot.queryParamMap;
    if (params.keys.length) {
      this.pageTitle = 'Line List From Advanced Search';
      return lines.filter(
        (line: ILine) =>
          (params.get('title')
            ? line.number
                .toLocaleLowerCase()
                .indexOf(params.get('number').toLocaleLowerCase()) !== -1
            : true) &&
          (params.get('destination')
            ? line.destination
                .toLocaleLowerCase()
                .indexOf(params.get('destination').toLocaleLowerCase()) !== -1
            : true) &&
          (params.get('mode')
            ? line.mode
                .toLocaleLowerCase()
                .indexOf(params.get('mode').toLocaleLowerCase()) !== -1
            : true)

        //   &&
        // (params.get('minStarRating')
        //   ? line.starRating >= +params.get('minStarRating')
        //   : true) &&
        // (params.get('maxStarRating')
        //   ? line.starRating <= +params.get('maxStarRating')
        //   : true)
      );
    }
    return lines;
  }
}
