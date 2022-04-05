import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shop/category.service';
import { ProductService } from 'src/app/shop/product.service';
import { environment } from '../../../environments/environment';
import { Product,ProductData } from '../../shared/models/product.model';

@Component({
  selector: 'featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  mix:String="mix";

  products: ProductData[];

  categories:any[]=[];
 
  imageurl=environment.imageUrl;

  constructor(private productService: ProductService,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  setClasses(newclass: any) {
    return {
      'mix': newclass
    };
  }

  retrieveProducts(): void {
    this.productService.getProducts(1,12)
      .subscribe({
        next: (response:Product) => { 
          for (let index = 0; index < response.data.length; index++) {
            for (let j = 0; j < response.data[index]['attributes']['categories'].data.length; j++) {
              this.categories.push({
                id:response.data[index]['attributes']['categories'].data[j].id,
                attributes:{
                  name:response.data[index]['attributes']['categories'].data[j].attributes.name,                 
                  status:response.data[index]['attributes']['categories'].data[j].attributes.status,
                  sort_order:response.data[index]['attributes']['categories'].data[j].attributes.sort_order,
                  slug:response.data[index]['attributes']['categories'].data[j].attributes.slug,
                }
              }
              );
            }          
          }
          const result = [];
          const map = new Map();
          for (const item of this.categories) {
              if(!map.has(item.id)){
                  map.set(item.id, true);    // set any value to Map
                  result.push({
                      id: item.id,
                      name: item.attributes.name,
                      slug:item.attributes.slug
                  });
              }
          }
          this.categories=result;
          this.products=response.data;
        },
        error: (e) => console.error(e)
      });
  }
}
