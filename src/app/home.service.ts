import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iperson } from 'src/assets/JSONData/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private x : string = "/assets/JSONData/person.json";

  constructor(private http : HttpClient) {  }


  getData() : Observable<Iperson[]>
  {
    return this.http.get<Iperson[]>(this.x)
  }

  


}
