import {FormControl, FormGroup} from "@angular/forms";
import {SignupComponent} from "./signup/signup.component";


export class CustValidators {

  static matchValidator(pas1:string, passRep: FormControl): {[key: string]: boolean} | null{
    if (pas1 == passRep.value) {
      console.log('here')
      return null
    }
    console.log('not here')
    return {mismatch: false}
  }

}
