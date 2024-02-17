import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analyse } from 'src/app/model/analyse';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  private baseURL = 'http://localhost:8888/api/v1/analyses';

  constructor(private httpClient: HttpClient) { }

  getAnalyses(): Observable<Analyse[]>
  {
    return this.httpClient.get<Analyse[]>(this.baseURL);
  }
}
