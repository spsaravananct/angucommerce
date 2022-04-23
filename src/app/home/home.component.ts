import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';
import { LayoutService } from '../core/services/layout.service';
import { Category, CategoryData } from '../shared/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedcategory:Number=0;

  categories : CategoryData[];

  items = ['All Categories'];
  expandedIndex = 0;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();  

  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe({
        next: (response:Category) => {
          this.categories=[];  
          this.categories=[{"id":0,"name":"All Categories","status":true,"sort_order":1,"slug":"all","image":{"url":""}},...response.data];  
        },
        error: (e) => console.error(e)
      });
  }
  
}
