import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../entity/User";
import {FormBuilder, Validators} from "@angular/forms";
import {Role} from "../entity/Role";

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
    this.usersService.getUsers().subscribe({
      next: (msg) => {
        console.log(JSON.parse(String(msg.body)))
        this.users = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
    console.log(this.users)
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
      role: ['', Validators.required],
      // email: ['', [
      //   Validators.required,
      //   Validators.email
      // ]],
      working: [false]
    })
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
  }

  submit() {
    if(this.formUserReg.valid) {
      const newUserData = {...this.formUserReg.value}
      let role = {
        role: {
          id: null,
          roleName: newUserData.role
        }
      }
      let editedRole = {...newUserData}
      Object.keys(editedRole).forEach((key: any) => {
        if (key == 'role')
          delete editedRole[key]
      })
      editedRole = {...editedRole, ...role}
      this.usersService.signupUser(editedRole).subscribe({
        next: (msg) => {
          console.log(msg)
        },
        error: (err) => {
          console.log('error', err)
        },
        complete: () => {
          setTimeout(() => {
            window.location.reload()
          }, 10)
        }
      })
      console.log(editedRole)
      this.formUserReg.reset()
    }
  }

  getSome() {
    this.usersService.getUsers().subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
  }

}
