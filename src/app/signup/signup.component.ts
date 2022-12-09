import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RestaurantsService} from "../services/restaurants.service";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formUserReg: any
  telephoneLength: number = 10
  passLength: number = 10
  newTokens: any
  pass: string

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formUserReg = this.fb.group({
      id: [null],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      patronymic: ['', Validators.required],
      telephoneNumber: [null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      address: ['', Validators.required],
      role: ['Client', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      login: ['', Validators.required],
      password: ['',[
        Validators.required,
        Validators.minLength(this.passLength-6),
        Validators.maxLength(this.passLength)
      ]],
      passwordRepeat: ['', Validators.required]
    }, {validator: this.matchValidator('password', 'passwordRepeat')})
  }

  matchValidator(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({mismatch: false})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  submit() {
    if(this.formUserReg.valid) {
      const newUserData = {...this.formUserReg.value}
      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      console.log(newUserData)
      this.formUserReg.reset()
      this.authService.login(newUserData.login)
    }
  }
  showCon() {
    console.log(this.formUserReg.get('passwordRepeat'))
    console.log(this.formUserReg.get('password')?.value)
    console.log(this.formUserReg.get('passwordRepeat')?.value)
    if (this.formUserReg.get('password')?.value != this.formUserReg.get('passwordRepeat')?.value)
      console.log('wrong')
  }
}
