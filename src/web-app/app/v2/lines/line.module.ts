import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { LineListComponent } from './list/line-list.component';
import { LineDetailComponent } from './detail/line-detail.component';
/*
import { LineEditComponent } from './edit/line-edit.component';
import { LineEditInfoComponent } from './edit/line-edit-info.component';
import { LineEditTagsComponent } from './edit/line-edit-tags.component';
*/

import { LineService, LineParameterService } from './line.service';

import { LineResolver } from './line.resolver';
import { LineSearchComponent } from './search/line-search.component';

/*
import { LineEditGuard } from './edit/line-edit.guard';
import { LineEditReactiveComponent } from './edit/line-edit-reactive.component';
*/

const lineRoutes: Routes = [
  { path: '', component: LineListComponent },
  { path: 'search', component: LineSearchComponent },
  {
    path: ':id',
    resolve: { line: LineResolver },
    component: LineDetailComponent
  }
  // {
  //   path: ':id/editReactive',
  //   resolve: { line: LineResolver },
  //   component: LineEditReactiveComponent
  // },
  // {
  //   path: ':id/edit',
  //   resolve: { line: LineResolver },
  //   canDeactivate: [LineEditGuard],
  //   component: LineEditComponent,
  //   children: [
  //     { path: '', redirectTo: 'info', pathMatch: 'full' },
  //     { path: 'info', component: LineEditInfoComponent },
  //     { path: 'tags', component: LineEditTagsComponent }
  //   ]
  // }
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forChild(lineRoutes)],
  declarations: [
    LineListComponent,
    LineDetailComponent,
    // LineEditComponent,
    // LineEditInfoComponent,
    // LineEditTagsComponent,
    // LineEditReactiveComponent,
    LineSearchComponent
  ],
  providers: [LineService, LineParameterService, LineResolver /*LineEditGuard*/]
})
export class LineModule {}
