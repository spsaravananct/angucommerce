import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { AddressData } from 'src/app/shared/models/address.model';
import { User } from 'src/app/shared/models/userdata.model';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {

  currentUser$:Observable<User>;

  user_id:Number;

  @Input() checkoutForm:FormGroup;

  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
    this.currentUser$.subscribe(user=>{
      this.user_id=user.id;   
    });
  }

  updateUserAddress(){
    this.accountService.updateUserAddress(this.checkoutForm.get('addressFrom')?.value,this.user_id).subscribe(()=>{
      console.log('success');
      this.toastr.success('Address Saved');
    },error=>{
      console.log(error);
    })
  }

}
