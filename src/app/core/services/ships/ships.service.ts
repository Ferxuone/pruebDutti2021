import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { expand, takeWhile, map } from 'rxjs/operators';
import { ShipResponseModel } from '../../models/ships.models';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(): Observable<ShipResponseModel>{
    return this.http.get(this.url).pipe(
      expand((data: ShipResponseModel) => {
        this.url = data.next;
        return this.http.get(this.url).pipe(
          map((newData: ShipResponseModel) => ({...newData, results: [...data.results, ...newData.results]}))
        );
      }),
      takeWhile((data: ShipResponseModel) => (data.next !== null), true),
      map((data: ShipResponseModel) => { return data })
    );
  }

  getShipList() {
    this.getShips();
  }
}
