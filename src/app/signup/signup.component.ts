import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RestaurantsService} from "../services/restaurants.service";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";
import {User} from "../entity/User";

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
      telephone: [null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(this.passLength-6),
        Validators.maxLength(this.passLength)
      ]],
      address: ['', Validators.required],
      myOrders: [null],
      latitude: [null],
      longitude: [null],
      placeOfWork: [null],
      role: [{id: null, roleName:'client'}],
      // email: ['', [
      //   Validators.required,
      //   Validators.email
      // ]],
      working: [false],
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
      let resultData = {...newUserData}
      let registeredUser: any
      Object.keys(resultData).forEach((key: any) => {
        if (key == 'passwordRepeat')
          delete resultData[key]
      })
      // console.log(JSON.stringify(resultData))
      // console.log(resultData)
      this.usersService.signupUser(resultData).subscribe({
        next: (msg) => {
          console.log(msg)
          registeredUser = msg
        },
        error: (err) => {
          console.log('error', err)
        },
        complete: () => {
          this.authService.login(newUserData.telephone, newUserData.password)
        }
      })
      console.log(registeredUser)
      this.formUserReg.reset()
    }
  }
  showCon() {
  }
}
