import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordComplexityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()\[\]{};:',?/*~$^+=<>-]).{8,}$/;
    return pattern.test(value) ? null : { passwordComplexity: true };
  };
}

export function passwordMatchValidator(
  passwordFieldName = 'password',
  confirmPasswordFieldName = 'confirmPassword'
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordFieldName)?.value;
    const confirmPassword = group.get(confirmPasswordFieldName)?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}
