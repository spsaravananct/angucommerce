import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { CategoryData } from '../../shared/models/product.model';
import { CategoryService } from '../../shop/category.service';

@Component({
  selector: 'categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent implements OnInit {

  categories : CategoryData[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe({
        next: (response:Category) => {
          this.categories=response.data;   
        },
        error: (e) => console.error(e)
      });
  }
}
