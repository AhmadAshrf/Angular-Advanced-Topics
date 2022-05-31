import { Observable } from 'rxjs';
import { User } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { existEmail } from 'src/app/CustomValidation/existEmailValidation';
import { passwordMatch } from 'src/app/CustomValidation/passwordMatch';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  RegisterForm: FormGroup
  ExistEmails: string[] = []
  constructor(private _formBuilder: FormBuilder) {
    this.ExistEmails = ['null@null.com', 'bb@bb.com', 'cc@cc.com']

    this.RegisterForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required, existEmail(this.ExistEmails)]],
      mobile: this._formBuilder.array([this._formBuilder.control('')], Validators.required),
      address: this._formBuilder.group({
        city: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        street: ['', [Validators.required]]
      }),
      password: ['', [Validators.required]],
      confPassword: ['', [Validators.required]],
      referral: [''],
      referralOther: ['']
    },{validators:passwordMatch})

    //Old Way to Validate Forms
    // this.RegisterForm = new FormGroup({
    //   fullName: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
    //   email: new FormControl(''),
    //   mobile: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode : new FormControl(''),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   confPassword: new FormControl(''),
    // })
  }

  ngOnInit(): void {
    //setValue need a completely model
    this.RegisterForm.patchValue({
      fullName: 'Ahmed',
      email: 'test@test.com'
    })
  }

  //Dealing with Methods As Properties
  get email() {
    return this.RegisterForm.get('email')
  }
  get mobile() {
    return this.RegisterForm.get('mobile') as FormArray
  }
  get referral() {
    return this.RegisterForm.get('referral')
  }
  get password() {
    return this.RegisterForm.get('password')
  }
  get confPassword() {
    return this.RegisterForm.get('confPassword')
  }

  //Dynamic Forms
  addPhone(ev: any) {
    console.log(this.mobile.controls.length)
    this.mobile.push(this._formBuilder.control(''))
    ev.target.style.display = 'none'
  }
  //Dynamic Forms
  removePhone() {
    console.log(this.mobile.length)
    this.mobile.controls.pop()
  }

  //Conditional Validator
  updateRefValue() {
    if (this.referral?.value == 'Other') {
      this.RegisterForm.get('referralOther')?.addValidators([Validators.required])
    } else {
      this.RegisterForm.get('referralOther')?.clearValidators()
    }
    this.RegisterForm.get('referralOther')?.updateValueAndValidity();

  }

  submit() {
    // let userModel:User = <User> this.RegisterForm.value
    let userModel: User = this.RegisterForm.value as User
    console.log(userModel)
  }

}



