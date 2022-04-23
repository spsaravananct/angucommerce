import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.css']
})
export class ContentTopComponent implements OnInit {

  layoutid:Number;

  modules:any;

  constructor(private layoutService:LayoutService,private router: Router) { }

  ngOnInit(): void {
    this.getLayout(this.router.url);   
  }

  getLayoutModules(layoutid: Number, location: Number) {
    this.layoutService.getLayoutModules(layoutid,location)
    .subscribe({
      next: (response) => {
        this.modules=response;
      },
      error: (e) => console.error(e)
    })
  }

  getLayout(route: string) {
    this.layoutService.getLayout(route)
    .subscribe({
      next: (response) => {
        this.layoutid=response.data[0].id;
        this.getLayoutModules(this.layoutid,1);
      },
      error: (e) => console.error(e)
    })
  }


}
