import { Currency, EmploymentStatus } from "@shared/enums/user.enums";

//#region request DTOs
export interface RegisterRequest{
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    employmentStatus: EmploymentStatus;
    monthlyAllowance: number;
    localCurrency: Currency;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface EditProfileRequest {
  firstName?: string;
  lastName?: string;
  employmentStatus?: EmploymentStatus;
  monthlyAllowance?: number;
  localCurrency?: Currency;
}
//#endregion

//#region response DTOs
export interface UserProfileResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  employmentStatus: EmploymentStatus;
  monthlyAllowance: number;
  localCurrency: Currency;
}
//#endregion

