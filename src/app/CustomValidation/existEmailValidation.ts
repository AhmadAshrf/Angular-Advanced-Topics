import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms"

//Custom Validator:
//Types : 1- Sync Validator Function, 2- Async Validator Function
// [1] => Sync Validator Function
export function existEmail(existEmails: string[]): ValidatorFn {
    //Factory Design Pattern
    //Parent Class
    return (control: AbstractControl): ValidationErrors | null => {
        let emailValue: string = control.value
        if (emailValue.length == 0 && control.untouched) {
            return null
        } else {
            let validationErr = { 'existEmails': { 'value': emailValue } }
            let fondEmail = existEmails.includes(emailValue)
            return fondEmail ? validationErr : null
            // return (emailValue.includes('@'))? null : validationErr
        }
    }
}


  // [2] => //Async Validator Function
  // existEmail(existEmails: string[]) :AsyncValidatorFn {
  //   //Factory Design Pattern
  //   //Parent Class
  //   return (control :AbstractControl) : Observable<ValidationErrors| null> => {
  //     let emailValue: string = control.value 
  //     if(emailValue.length == 0 && control.untouched){
  //       return null
  //     }else{
  //       let validationErr = {'existEmails': {'value' : emailValue}}
  //       let fondEmail = existEmails.includes(emailValue)
  //       return fondEmail? validationErr : null
  //       // return (emailValue.includes('@'))? null : validationErr
  //     }
  //   }
  // }