import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserClientService } from '@client/services/user-client.service';
import { RegisterRequest } from '@client/models/user-client.model';
import { Currency, EmploymentStatus } from '@shared/enums/user.enums';
import { passwordComplexityValidator, passwordMatchValidator } from '@shared/validators/password.validators';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, NgIf, NgFor, TranslocoDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
    registrationData: FormGroup;
    readonly employmentStatuses = Object.values(EmploymentStatus);
    readonly currencies = Object.values(Currency);
    private userService = inject(UserClientService);
    private transloco = inject(TranslocoService);

    constructor(private fb: FormBuilder) {
      this.registrationData = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordComplexityValidator()]],
        confirmPassword: ['', Validators.required],
        employmentStatus: ['', Validators.required],
        monthlyAllowance: ['', [Validators.required, Validators.min(0)]],
        localCurrency: ['', Validators.required]
      }, { validators: passwordMatchValidator() });
    }

    ngOnInit() {
    }

    register() {
      if (!this.registrationData.valid) {
        this.registrationData.markAllAsTouched();
        return;
      }

      const registerRequest: RegisterRequest = this.registrationData.value;
      this.userService.register(registerRequest);
    }

    getPasswordErrors(): string[] {
      const control = this.registrationData.get('password');
      const errors: string[] = [];

      if (control?.hasError('passwordComplexity')) {
        errors.push(this.transloco.translate('validation.password.complexity'));
      }
      
      return errors;
    }

    getConfirmPasswordErrors(): string[] {
      const errors: string[] = [];

      if (this.registrationData.hasError('passwordMismatch')) {
        errors.push(this.transloco.translate('validation.confirmPassword.mismatch'));
      }
      
      return errors;
    }

    getRequiredError(controlName: string): string | null {
      const control = this.registrationData.get(controlName);
      if (!control) {
        return null;
      }

      if ((control.touched || control.dirty) && control.hasError('required')) {
        return this.transloco.translate('validation.required');
      }

      return null;
    }
}
