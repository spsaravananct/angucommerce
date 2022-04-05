import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyrequestcount=0;

  constructor(private spinnerService :NgxSpinnerService) { }

  busy(){

    this.busyrequestcount++;
    this.spinnerService.show();

  }

  idle(){
    this.busyrequestcount--;
    if(this.busyrequestcount<=0){
      this.busyrequestcount=0;
      this.spinnerService.hide();
    }
    
  }
}
