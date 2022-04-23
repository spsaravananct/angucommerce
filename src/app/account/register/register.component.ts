import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  errors:any[];

  error:String;

  constructor(private fb:FormBuilder, private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=this.fb.group({
      username:['spsaravananct',[Validators.required]],
      email:['spsaravananct@gmail.com',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      password:['123',[Validators.required,Validators.minLength(6), Validators.maxLength(8)]]
    })
  }

  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe(()=>{

      this.router.navigateByUrl('/shop');

      console.log('user logged');
    },error=>{
      console.log(error.error);
      if(error.error.error.details.errors){
        this.errors=error.error.error.details.errors
      }else{
        this.error=error.error.error.message
      }
      
    }
    )
  }

}
