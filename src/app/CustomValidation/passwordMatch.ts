import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
//Cross-Field Custom Validation

//Without Parameter
export const passwordMatch: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        // return (control: AbstractControl): ValidationErrors | null => {}
        let passwordControl = control.get('password')
        let confPasswordControl = control.get('confPassword')
        if (!passwordControl || !confPasswordControl || !passwordControl.value || !confPasswordControl.value) {
            return null
        } else {
            let validationERR = { 'UnmatchedPassword': { 'pass': passwordControl.value, 'confPass': confPasswordControl.value } }
            return (passwordControl.value == confPasswordControl.value) ? null : validationERR
        }
    }


//With Parameter
export function passwordMatchAdv(complexPassword:boolean = false): ValidatorFn {
    //Factory Function Design Pattern
    return (control: AbstractControl): ValidationErrors | null => {
        let passwordControl = control.get('password')
        let confPasswordControl = control.get('confPassword')
        if (!passwordControl || !confPasswordControl || !passwordControl.value || !confPasswordControl.value) {
            return null
        } else {
            let validationERR = { 'UnmatchedPassword': { 'pass': passwordControl.value, 'confPass': confPasswordControl.value } }
            return (passwordControl.value == confPasswordControl.value) ? null : validationERR
        }
    }
}