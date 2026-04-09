import { PriorityCategory } from "@shared/enums/goal.enums";

export interface Goal {
    id: string;
    name: string;
    description: string;
    priorityCategory: PriorityCategory;
    targetAmount: number;
    currentAmount: number;
    lifeGoal: boolean;
    ownerId: string;
    participantsIds: string[];
    goalActivities: GoalActivity[];
}

export interface GoalActivity{
    id: string;
    description: string;
    eventType: any;
    amount: number;
    date: Date;
    goalId: string;
}