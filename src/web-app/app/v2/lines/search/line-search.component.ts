import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './line-search.component.html',
  styles: []
})
export class LineSearchComponent implements OnInit {
  pageTitle: string = 'Advanced Search';
  errorMessage: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  search(criteria): void {
    this.router.navigate(['/lines'], { queryParams: criteria });
  }
}
