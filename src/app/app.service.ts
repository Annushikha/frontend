import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = environment.backendApi;

  constructor(private http: HttpClient) { }


  getDashboard(){
    console.log(this.baseUrl);
    
    return this.http.get(`${this.baseUrl}/`).pipe(
      map((user: any) => {
          return user;
      })
  );
  }

}