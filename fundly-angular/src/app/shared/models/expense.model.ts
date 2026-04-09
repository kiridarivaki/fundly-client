import { BudgetType, FrequencyCategory } from "@shared/enums/expense.enums";

export interface Expense{
    id: string;
    name: string,
    description: string;
    amount: number;
    date: Date;
    frequency: FrequencyCategory;
    isFutureExpense: boolean;
    expensecategoryid: string;
    userid: string;
}

export interface ExpenseCategory{
    id: string;
    name: string;
    description: string;
    iconIdentifier: string;
    budgetType: BudgetType;
    userid: string;
    expenses: Expense[];
}