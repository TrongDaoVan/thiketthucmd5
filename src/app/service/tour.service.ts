import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Tour} from "../tour/tour";
const api_URL=`${environment.api_url}`;
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Tour[]>{
    return this.http.get<Tour[]>(api_URL + '/tuors');
  }
  findTourById(id:number){
    return this.http.get<Tour>(`${api_URL}/tuors/${id}`)
  }
  saveTour(tour:Tour):Observable<Tour>{
    return this.http.post<Tour>(api_URL+'/tuors',tour)
  }
  deleteTour(id:number| undefined):Observable<Tour>{
    return this.http.delete<Tour>(`${api_URL}/tuors/${id}`);
  }

  editTour(id: number | undefined, tour: Tour):Observable<Tour>{
    return this.http.put<Tour>(`${api_URL}/tuors/${id}`,tour)
  }
}
