import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApodService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Ci3wYHJwOlcJDK1OQQSMp5oawbd02oshbsaXgM33'

  constructor(private http: HttpClient) {}

  getImg(dateApi: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '&date=' + dateApi)
  }

}
