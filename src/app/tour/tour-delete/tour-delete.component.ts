import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Tour} from "../tour";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrls: ['./tour-delete.component.css']
})
export class TourDeleteComponent implements OnInit {

  sub: Subscription;

  tour: Tour = {};

  id: number | undefined;

  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    })
  }

  ngOnInit() {
  }

  getTour(id: number) {
    this.tourService.findTourById(id).subscribe(tours => {
      this.tour = tours;
    });
  }

  deleteTour(id: number | undefined) {
    this.tourService.deleteTour(id).subscribe(() => {
      alert('Xóa thành công rùi nhé !');
      this.router.navigate(["tour/list"]);
    }, e => {
      console.log(e);
    });
  }
}
