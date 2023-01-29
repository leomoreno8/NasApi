import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Observable, Subject } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent {
  private clickSubject = new Subject();
  constructor(private router: Router) { }

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        command: (event) => { this.clickHome(); }
      },
      {
        label:'APIs',
        icon:'pi pi-fw pi-cloud-upload',
        items:[
            {
              label:'NeoWs API',
              icon:'pi pi-fw pi-chevron-right',
              command: (event) => { this.clickNeoWs(); }
            },
            {
              label:'APOD API',
              icon:'pi pi-fw pi-chevron-right',
              command: (event) => { this.clickApod(); }
            },
            {
              separator:true
            }
          ]
      },
      {
          label:'About us',
          icon:'pi pi-fw pi-info-circle',
          command: (event) => { this.clickAboutUs(); }
      },
      {
          separator:true
      },
      {
          label:'Contact',
          icon:'pi pi-fw pi-comment',
          command: (event) => { this.clickContact(); }
      }
    ];
  }

  clickHome() {
    this.router.navigate(['']);
  }

  clickNeoWs() {
    this.router.navigate(['neows-component']);
  }

  clickApod() {
    this.router.navigate(['apod-component']);
  }

  clickAboutUs() {
    this.router.navigate(['about-us-component']);
  }

  clickContact() {
    this.router.navigate(['contact-component']);
  }
}
