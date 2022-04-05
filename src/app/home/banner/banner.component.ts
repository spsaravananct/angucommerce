import { Component,Input,OnInit} from '@angular/core';
import { BannerService } from 'src/app/core/services/banner.service';
import { environment } from '../../../environments/environment';
import { Banner } from '../../shared/models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  banner?: Banner[];
  imageurl=environment.imageUrl;

  @Input()
  location:string;

  ngOnInit(): void {
    //console.log(this.location); 
    this.getBanner(this.location);
  }

  constructor(private bannerService: BannerService) {
   
  }

  getBanner(type:string): void {
    this.bannerService.getBanner(type)
      .subscribe({
        next: (response) => {
          this.banner=response.data;
          //console.log(this.banner);      
        },
        error: (e) => console.error(e)
      });
  }

}
