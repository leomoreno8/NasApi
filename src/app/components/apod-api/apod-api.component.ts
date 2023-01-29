import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodService } from './../../services/apod/apod.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-apod-api',
  templateUrl: './apod-api.component.html',
  styleUrls: ['./apod-api.component.css']
})
export class ApodApiComponent {
  public apodApi: Observable<any> | undefined;
  public randomApodApi: Observable<any> | undefined;

  constructor(private apodService: ApodService, private datePipe: DatePipe, private http: HttpClient) { }

  date!: Date;
  imgApod!: string;
  dateApod!: string;

  isLoading: boolean = false

  getData(event: any): void {
    let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Ci3wYHJwOlcJDK1OQQSMp5oawbd02oshbsaXgM33'
    let dateApi: any = new Date(event).toLocaleDateString("en-US");
    dateApi = this.datePipe.transform(dateApi,"yyyy-MM-dd")
    this.randomApodApi = undefined;
    this.isLoading = true;
    this.apodApi = this.http.get(apiUrl + '&date=' + dateApi)
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  getRandomData(): void {
    this.apodApi = undefined;
    this.isLoading = true;
    let apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Ci3wYHJwOlcJDK1OQQSMp5oawbd02oshbsaXgM33&count=1'
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
    this.randomApodApi = this.http.get(apiUrl)
  }

}
