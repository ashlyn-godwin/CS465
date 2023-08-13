import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {
  constructor(private http: Http) {}
  
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips`;

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
  private handleError(error:any): Promise<any> {
    console.error("Something has gone Wrong", error);
    return Promise.reject(error.message || error);
  }
}