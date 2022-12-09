import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../entity/User";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UserspageComponent implements OnInit {

  users: User[] = []
  regToggle: boolean = false;
  formUserReg: any
  telephoneLength: number = 10
  passLength: number = 10

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers()
    console.log(this.users)
    this.formUserReg = this.fb.group({
      id: [null],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      patronymic: ['', Validators.required],
      telephoneNumber: [null, [
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      address: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      login: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(this.passLength - 6),
        Validators.maxLength(this.passLength)
      ]],
    })
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
    this.users = this.usersService.getUsers()
  }

  submit() {
    if(this.formUserReg.valid) {
      const newUserData = {...this.formUserReg.value}

      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      // console.log(newUserData)
      // window.location.reload()
      this.usersService.addUser(newUserData)
      this.formUserReg.reset()
    }
  }

}
