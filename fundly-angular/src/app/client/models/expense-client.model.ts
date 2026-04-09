import { BudgetType, FrequencyCategory } from "@shared/enums/expense.enums";
import { Expense, ExpenseCategory } from "@shared/models/expense.model";

//#region request DTOs
export interface CreateExpenseRequest {
    name: string;
    description?: string;
    amount: number;
    date: Date;
    frequency: FrequencyCategory;
    futureExpense: boolean;
    categoryId: string;
}

export interface UpdateExpenseRequest {
    name: string;
    description?: string;
    amount: number;
    date: Date;
    frequency: FrequencyCategory;
    futureExpense: boolean;
}

export interface CreateExpenseCategoryRequest {
    name: string;
    description?: string;
    iconIdentifier: string;
    budgetType: BudgetType;
}

export interface UpdateExpenseCategoryRequest {
    name: string;
    description?: string;
    iconIdentifier: string;
    budgetType: BudgetType;
}
//#endregion

//#region response DTOs
export interface CategoryWithExpensesResponse {
    category: ExpenseCategory;
    expenses: Expense[];
}
//#endregion