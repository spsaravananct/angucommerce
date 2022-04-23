import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../environments/environment';
import { Category,CategoryData } from '../../shared/models/category.model';

@Component({
  selector: 'categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.scss']
})
export class CategoriesSliderComponent implements OnInit {

  categories : CategoryData[];

  imageurl=environment.imageUrl;

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    items: 4,
    dots: false,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
          items: 1,
      },

      480: {
          items: 2,
      },

      768: {
          items: 3,
      },

      992: {
          items: 4,
      }
    }
  }

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
