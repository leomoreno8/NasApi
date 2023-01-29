import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-neows-api',
  templateUrl: './neows-api.component.html',
  styleUrls: ['./neows-api.component.css']
})
export class NeowsApiComponent {
  public neowsApi: Observable<any> | undefined;

  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  date!: Date;
  isLoading: boolean = false

  getData(date1: any): void {
    let apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=Ci3wYHJwOlcJDK1OQQSMp5oawbd02oshbsaXgM33'
    let dateApi1: any = new Date(date1).toLocaleDateString("en-US");
    dateApi1 = this.datePipe.transform(dateApi1,"yyyy-MM-dd")
    this.isLoading = true;
    this.neowsApi = this.http.get<any>(apiUrl + '&start_date=' + dateApi1 + '&end_date=' + dateApi1)
      .pipe(map(data => Object.keys(data.near_earth_objects).map(key => data.near_earth_objects[key])[0]))
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

}
