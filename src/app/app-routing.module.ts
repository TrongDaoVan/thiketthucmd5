import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {TourCreateComponent} from "./tour/tour-create/tour-create.component";
import {TourEditComponent} from "./tour/tour-edit/tour-edit.component";
import {TourDeleteComponent} from "./tour/tour-delete/tour-delete.component";

const routes: Routes = [{
  path: 'tour/list',
  component: TourListComponent
}, {
  path: 'tour/create',
  component: TourCreateComponent
}, {
  path: 'tour/edit/:id',
  component: TourEditComponent
}, {
  path: 'tour/delete/:id',
  component: TourDeleteComponent
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]

})
export class AppRoutingModule { }
