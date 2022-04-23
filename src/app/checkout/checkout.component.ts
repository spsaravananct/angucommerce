import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';
import { Address, AddressData } from '../shared/models/address.model';
import { User } from '../shared/models/userdata.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  currentUser$:Observable<User>;

  checkoutForm:FormGroup;

  address:Address;

  constructor(private fb:FormBuilder,private accountService:AccountService) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.currentUser$=this.accountService.currentUser$;
    this.currentUser$.subscribe(user=>{
      this.getUserAddress(user.id)    
    });
  }

  createCheckoutForm(){
    this.checkoutForm=this.fb.group({
      addressFrom:this.fb.group({
        firstName:[null,[Validators.required]],
        lastName:[null,[Validators.required]],
        street:[null,[Validators.required]],
        city:[null,[Validators.required]],
        state:[null,[Validators.required]],
        zipCode:[null,[Validators.required]],
      }),
      deliveryForm:this.fb.group({
        deliveryMethod:[null,[Validators.required]]
      }),
      paymentForm:this.fb.group({
        nameOnCard:[null,[Validators.required]]
      })
    });
  }

  getUserAddress(user_id: number){
    this.accountService.getUserAddress(user_id).subscribe({
      next: (response) => {       
        this.address=response;
        if(this.address){
          this.checkoutForm.get('addressFrom')?.patchValue(this.address.data[0])
        }
      },
      error: (e) => console.error(e)
    });
  }

}
