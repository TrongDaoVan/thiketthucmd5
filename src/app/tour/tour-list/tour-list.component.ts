import { Component, OnInit } from '@angular/core';
import {Tour} from "../tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tour:Tour[]=[];
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
    this.tourService.getAll().subscribe(tours=>{
      this.tour=tours;
    })
}

}
