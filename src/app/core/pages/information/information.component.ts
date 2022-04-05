import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Information } from '../../../shared/models/information.model';
import { InformationService } from 'src/app/core/services/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  information?: Information[];

  title:string;
  content:string;

  id: any;
  
  constructor(private activatedRoute : ActivatedRoute,private informationService: InformationService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.retrieveInformtion(this.id);
    });
  }

  retrieveInformtion(id:Number): void {
    this.informationService.getSingle(id)
      .subscribe({
        next: (response) => {       
          this.title=response.data.attributes.title;
          this.content=response.data.attributes.content;
        },
        error: (e) => console.error(e)
      });
  }

}
