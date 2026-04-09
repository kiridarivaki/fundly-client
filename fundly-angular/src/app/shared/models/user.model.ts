import { EmploymentStatus, Currency } from '../enums/user.enums';
import { Expense, ExpenseCategory } from './expense.model';

export interface AppUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  employmentStatus: EmploymentStatus;
  monthlyAllowance: number;
  localCurrency: Currency;
  expenses: Expense[];
  expenseCategories: ExpenseCategory[];
  loans: any[];
  goalActivities: any[];
}
