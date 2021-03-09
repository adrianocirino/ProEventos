import { AbstractControl, FormGroup } from '@angular/forms';

export class ValidatorField{
  // tslint:disable-next-line: typedef
  static MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.iguais) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ iguais: true });
      } else {
        matchingControl.setErrors(null);
      }

      return null;
    };
  }
}
