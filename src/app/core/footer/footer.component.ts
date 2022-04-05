import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Information } from '../../shared/models/information.model';
import { InformationService } from 'src/app/core/services/information.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  informations1?: Information[];
  informations2?: Information[];

  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    this.retrieveInformtions();
  }

  retrieveInformtions(): void {
    this.informationService.getAll()
      .subscribe({
        next: (response) => {       
          this.informations1=response.data.splice(6);
          this.informations2=response.data.splice(0,6);
        },
        error: (e) => console.error(e)
      });
  }

}
