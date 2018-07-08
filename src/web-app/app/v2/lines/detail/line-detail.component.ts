import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ILine } from '../line';
import { LineService } from '../line.service';

@Component({
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {
  pageTitle: string = 'Line Detail';
  line: ILine;
  errorMessage: string;

  constructor(
    private lineService: LineService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.line = this.route.snapshot.data['line'];
  }

  onBack(): void {
    this.router.navigate(['/lines']);
  }
}
