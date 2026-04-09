import { GoalRole, PriorityCategory } from "@shared/enums/goal.enums";
import { GoalActivity } from "@shared/models/goal.model";

//#region request DTOs
export interface CreateSavingsGoalRequest {
    name: string;
    description?: string;
    priority: PriorityCategory;
    targetAmount: number;
    currentAmount?: number;
    isLifeGoal: boolean;
}

export interface UpdateSavingsGoalRequest {
    name?: string;
    description?: string;
    priority?: PriorityCategory;
    targetAmount?: number;
    currentAmount?: number;
    isLifeGoal?: boolean;
}

export interface AddParticipantRequest{
    email: string;
    role: GoalRole;
}

export interface AddContributorRequest{
    description: string;
    amount: number;
}
//#endregion

//#response DTOs
export interface GoalFeedResponse {
    goalActivities: GoalActivity[];
    goalId: string;
    goalName: string;
    amountLeft: number;
}
//#endregion