import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product, ProductData,Meta } from '../shared/models/product.model';
import { CategoryData} from '../shared/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/shop/product.service';
import { environment } from '../../environments/environment';
import { Options,LabelType } from '@angular-slider/ngx-slider';
import { Category } from '../shared/models/category.model';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @ViewChild('search',{static:true}) searchTerm:ElementRef;

  selectedcategory:Number=0;
  searchValue:String='';
  sortSelected:String='name';
  sortOptions=[
    {name:"Alphbetical",value:"name:asc"},
    {name:"Price: Low to High",value:"price:asc"},
    {name:"Price: High to Low",value:"price:desc"},
  ];

  categories : CategoryData[];

  products:ProductData[];
  meta:Meta;

  imageurl=environment.imageUrl;

  page = 1;
  total=0;
  pageSize = 6;
  pageCount=1;

  //pagetotal=this.pageSize/this.pageCount;

  minValue: number = 10;
  maxValue: number = 1000;

  options: Options = {
    floor: 10,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> ₹" + value;
        case LabelType.High:
          return "<b>Max price:</b> ₹" + value;
        default:
          return "₹" + value;
      }
    }
  };


  constructor(private productService: ProductService,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    
    this.productService.getProducts(this.page,this.pageSize,this.minValue,this.maxValue,this.selectedcategory,this.sortSelected,this.searchValue)
      .subscribe({
        next: (response:Product) => {
          this.products=response.data;
          this.meta=response.meta;
          this.total=this.meta.pagination.total;
          this.pageCount=this.meta.pagination.pageCount;
        },
        error: (e) => console.error(e)
      });
  }


  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe({
        next: (response:Category) => {
          this.categories=[];  
          this.categories=[{"id":0,"name":"All","status":true,"sort_order":1,"slug":"all","image":{"url":""}},...response.data];   
        },
        error: (e) => console.error(e)
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveProducts();
  }

  onCategorySelected(category_id:Number){
    this.selectedcategory=category_id;
    this.retrieveProducts();
  }

  onSortSelected(sort:String){
    this.sortSelected=sort;
    this.retrieveProducts();
  }

  onSearch(){
    this.searchValue=this.searchTerm.nativeElement.value;
    this.retrieveProducts();
  }

  onReset(){
    this.searchTerm.nativeElement.value='';
    this.searchValue='';
    this.retrieveProducts();
  }
}
