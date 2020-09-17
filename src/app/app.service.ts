import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apikey = '&apikey=5fa513d5';
  readonly api = `https://www.omdbapi.com/?t=`;

  constructor(private http: HttpClient) { }

  getTvShowApi(titleValue: string): Observable<any> {
    return this.http.get(this.api+titleValue+this.apikey);
  }
  getEpisodesApi(titleValue: string,seasonNumber: any): Observable<any> {
    return this.http.get(this.api+titleValue+this.apikey+"&Season="+seasonNumber);
  }

  getEpisodesiDetailsApi(titleValue: string,seasonNumber: any,episodeNumber: any): Observable<any> {
    return this.http.get(this.api+titleValue+this.apikey+"&Season="+seasonNumber+'&Episode='+episodeNumber);
  }

}
